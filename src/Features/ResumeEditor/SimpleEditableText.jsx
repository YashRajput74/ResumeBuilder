import React from "react";
import { useState, useRef, useEffect } from "react";

export default function SimpleEditableText({ text = "", onChange, tag = "span", style = {} }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(text);
    const inputRef = useRef();

    useEffect(() => {
        setValue(text);
    }, [text]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleBlur = () => {
        setIsEditing(false);
        onChange(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleBlur();
        }
    };

    return isEditing ? (
        <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{
                ...style,
                width: `${Math.max(value.length+0.3, 1)}ch`,
                font: "inherit",
                background: "transparent",
                border: "none",
                borderBottom: '1px solid black',
                outline: "none"
            }}
        />
    ) : (
        React.createElement(
            tag,
            {
                onClick: () => setIsEditing(true),
                style: {
                    cursor: "text",
                    ...style
                }
            },
            value
        )
    );
}
