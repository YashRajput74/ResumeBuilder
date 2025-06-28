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
import "./EditableText.css"; // optional for styling

export default function EditableText({ fragments = [], onChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const editorRef = useRef(null);

    // Convert fragments to HTML string
    const toInitialHTML = () => {
        return fragments
            .map((frag) => {
                const openTags = [];
                if (frag.bold) openTags.push("b");
                if (frag.italic) openTags.push("i");
                if (frag.underline) openTags.push("u");

                let inner = frag.text;
                openTags.reverse().forEach((tag) => {
                    inner = `<${tag}>${inner}</${tag}>`;
                });

                return inner;
            })
            .join("");
    };

    // Convert edited HTML to fragment array
    const toFragments = (html) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const result = [];

        const traverse = (node, format = {}) => {
            if (node.nodeType === Node.TEXT_NODE) {
                result.push({
                    text: node.textContent,
                    bold: format.bold || false,
                    italic: format.italic || false,
                    underline: format.underline || false,
                });
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const tag = node.tagName.toLowerCase();
                const newFormat = {
                    bold: format.bold || tag === "b" || tag === "strong",
                    italic: format.italic || tag === "i" || tag === "em",
                    underline: format.underline || tag === "u",
                };
                node.childNodes.forEach((child) => traverse(child, newFormat));
            }
        };

        tempDiv.childNodes.forEach((child) => traverse(child));
        return result;
    };

    const handleBlur = () => {
        setIsEditing(false);
        const html = editorRef.current.innerHTML;
        const newFragments = toFragments(html);
        onChange(newFragments);
    };

    return (
        <div className="editable-text-wrapper">
            {isEditing ? (
                <div
                    ref={editorRef}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={handleBlur}
                    dangerouslySetInnerHTML={{ __html: toInitialHTML() }}
                    style={{
                        minHeight: "1.5em",
                        border: "1px dashed #aaa",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        background: "#fff",
                        cursor: "text",
                    }}
                />
            ) : (
                <div
                    ref={editorRef}
                    onClick={() => setIsEditing(true)}
                    style={{ cursor: "text" }}
                >
                    {fragments.map((frag, i) => (
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
            )}
        </div>
    );
}
