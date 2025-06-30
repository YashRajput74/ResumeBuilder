/* import { useState, useEffect, useRef } from "react";

export default function EditableText({ fragments = [], onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [localText, setLocalText] = useState("");
    const textareaRef = useRef();

    useEffect(() => {
        const fullText = fragments.map(frag => frag.text).join("");
        setLocalText(fullText);
    }, [fragments]);

    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isEditing]);

    const handleBlur = () => {
        setIsEditing(false);
        onChange([{ text: localText, bold: false, italic: false, underline: false }]);
    };

    return isEditing ? (
        <textarea
            ref={textareaRef}
            value={localText}
            onChange={(e) => setLocalText(e.target.value)}
            onBlur={handleBlur}
            rows={Math.max(1, localText.split("\n").length)}
            style={{
                width: "100%",
                font: "inherit",
                lineHeight: "1.4",
                border: "none",
                borderBottom: '1px solid black',
                background: "transparent",
                resize: "vertical",
                overflow: "auto",
                outline: 'none',
                scrollbarWidth: 'none'
            }}
        />
    ) : (
        <span onClick={() => setIsEditing(true)} style={{ cursor: "text" }}>
            {fragments.map((frag, i) => (
                <span
                    key={i}
                    style={{
                        fontWeight: frag.bold ? "bold" : "normal",
                        fontStyle: frag.italic ? "italic" : "normal",
                        textDecoration: frag.underline ? "underline" : "none"
                    }}
                >
                    {frag.text}
                </span>
            ))}
        </span>
    );
}
 */

/* import { useState, useEffect } from "react";

export default function EditableText({ fragments = [], onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [localText, setLocalText] = useState("");

    useEffect(() => {
        const fullText = fragments.map(frag => frag.text).join("");
        setLocalText(fullText);
    }, [fragments]);    

    const handleBlur = () => {
        setIsEditing(false);
        onChange([{ text: localText, bold: false, italic: false, underline: false }]);
    };    

    const lineCount = localText.split('\n').filter((line, i, arr) =>
        i < arr.length - 1 || line.trim() !== ''    
    ).length;

    return isEditing ? (
        <input
            type="text"
            value={localText}
            onChange={(e) => setLocalText(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    handleBlur();
                }    
            }}    
            style={{
                font: "inherit",
                background: "transparent",
                border: "none",
                borderBottom: '1px solid black',
                outline: "none",
                width: `${Math.max(localText.length - 10, 1)}ch`
            }}    
            autoFocus
        />    
    ) : (
        <span onClick={() => setIsEditing(true)} style={{ cursor: "text" }}>
            {fragments.map((frag, i) => (
                <span
                    key={i}
                    style={{
                        fontWeight: frag.bold ? "bold" : "normal",
                        fontStyle: frag.italic ? "italic" : "normal",
                        textDecoration: frag.underline ? "underline" : "none"
                    }}    
                >    
                    {frag.text}
                </span>    
            ))}    
        </span>    
    );    
} */

import { useState, useEffect, useRef } from "react";

export default function EditableText({ fragments = [], onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [selection, setSelection] = useState(null);
    const [content, setContent] = useState([]);
    const editableRef = useRef();

    useEffect(() => {
        setContent(fragments);
    }, [fragments]);

    const handleBlur = () => {
        if (!editableRef.current) return;

        const spans = Array.from(editableRef.current.childNodes);
        const updatedFragments = spans.map((node) => ({
            text: node.textContent,
            bold: node.style.fontWeight === "bold",
            italic: node.style.fontStyle === "italic",
            underline: node.style.textDecoration.includes("underline"),
        }));

        setIsEditing(false);
        onChange(updatedFragments);
    };

    const execCommand = (styleType) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        if (!selectedText) return;

        const span = document.createElement("span");
        span.textContent = selectedText;

        switch (styleType) {
            case "bold":
                span.style.fontWeight = "bold";
                break;
            case "italic":
                span.style.fontStyle = "italic";
                break;
            case "underline":
                span.style.textDecoration = "underline";
                break;
            case "link": {
                const url = prompt("Enter URL:");
                if (url) {
                    const a = document.createElement("a");
                    a.href = url;
                    a.target = "_blank";
                    a.rel = "noreferrer";
                    a.textContent = selectedText;
                    a.style.textDecoration = "underline";
                    a.style.color = "blue";
                    range.deleteContents();
                    range.insertNode(a);
                }
                return;
            }
            default:
                break;
        }

        range.deleteContents();
        range.insertNode(span);
    };

    const renderToolbar = () => (
        <div style={{ display: "flex", gap: "6px", marginBottom: "4px" }}>
            <button onMouseDown={(e) => { e.preventDefault(); execCommand("bold"); }}><b>B</b></button>
            <button onMouseDown={(e) => { e.preventDefault(); execCommand("italic"); }}><i>I</i></button>
            <button onMouseDown={(e) => { e.preventDefault(); execCommand("underline"); }}><u>U</u></button>
            <button onMouseDown={(e) => { e.preventDefault(); execCommand("link"); }}>🔗</button>
        </div>
    );

    return (
        <div>
            {isEditing && renderToolbar()}

            <div
                ref={editableRef}
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur}
                onClick={() => setIsEditing(true)}
                style={{
                    cursor: "text",
                    border: 'none',
                    borderBottom: isEditing ? "1px solid" : "none",
                    background: isEditing ? "#f9f9f9" : "transparent",
                    outline: 'none'
                }}
            >
                {content.map((frag, i) => (
                    <span
                        key={i}
                        style={{
                            fontWeight: frag.bold ? "bold" : "normal",
                            fontStyle: frag.italic ? "italic" : "normal",
                            textDecoration: frag.underline ? "underline" : "none",
                        }}
                    >
                        {frag.text}
                    </span>
                ))}
            </div>
        </div>
    );
}
