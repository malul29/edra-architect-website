"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { BubbleMenu, FloatingMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

// Helper to convert legacy block array to HTML
function convertLegacyContentToHTML(contentArray) {
  if (!Array.isArray(contentArray)) return contentArray || "";

  return contentArray
    .map((block) => {
      switch (block.type) {
        case "heading":
          return `<h2>${block.content || ""}</h2>`;
        case "paragraph":
          return `<p>${block.content || ""}</p>`;
        case "quote":
          return `<blockquote>${block.content || ""}</blockquote>`;
        case "image":
          return `<img src="${block.content || ""}" alt="${block.caption || ""}" />${block.caption ? `<p><em>${block.caption}</em></p>` : ""
            }`;
        case "image-grid":
          // Simplified fallback for image grids in Tiptap
          const images = Array.isArray(block.content) ? block.content : [];
          return images
            .filter((img) => img)
            .map((img) => `<img src="${img}" alt="Grid Image" />`)
            .join("");
        default:
          return "";
      }
    })
    .join("");
}

export default function RichTextEditor({ value, onChange }) {
  const [isMounted, setIsMounted] = useState(false);
  const fileInputRef = useRef(null);

  // Initialize editor content once
  // Convert legacy array format to HTML string if needed
  const initialContent = Array.isArray(value) ? convertLegacyContentToHTML(value) : value || "";

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: "Tell your story...",
        emptyEditorClass: "is-editor-empty",
      }),
      Image.configure({
        HTMLAttributes: {
          class: "editor-image",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "editor-link",
        },
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file && editor) {
      const reader = new FileReader();
      reader.onloadend = () => {
        editor.chain().focus().setImage({ src: reader.result }).run();
      };
      reader.readAsDataURL(file);
    }
  }, [editor]);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!isMounted || !editor) {
    return <div className="editor-loading">Loading editor...</div>;
  }

  return (
    <div className="medium-editor-container">
      {/* Hidden file input for images */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        style={{ display: "none" }}
      />

      {/* Bubble Menu - Shows up when text is selected */}
      {editor && (
        <BubbleMenu className="medium-bubble-menu" editor={editor}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            B
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            i
          </button>
          <button
            type="button"
            onClick={setLink}
            className={editor.isActive("link") ? "is-active" : ""}
          >
            🔗
          </button>
          <div className="divider"></div>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
          >
            T
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
          >
            t
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            "
          </button>
        </BubbleMenu>
      )}

      {/* Floating Menu - Shows up on empty paragraphs */}
      {editor && (
        <FloatingMenu className="medium-floating-menu" editor={editor}>
          <button
            type="button"
            className="floating-menu-btn"
            onClick={() => triggerFileInput()}
            title="Add an Image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="floating-menu-btn"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            title="Add a Title"
          >
            T
          </button>
        </FloatingMenu>
      )}      {/* Actual Editor Component */}
      <EditorContent editor={editor} className="medium-editor-content" />
    </div>
  );
}
