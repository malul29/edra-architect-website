import { useState, useRef } from "react";

export default function RichTextEditor({ value, onChange }) {
  const [content, setContent] = useState(value || []);
  const fileInputRef = useRef(null);
  const [activeBlockIndex, setActiveBlockIndex] = useState(null);

  // Update content and notify parent
  const updateContent = (newContent) => {
    setContent(newContent);
    onChange(newContent);
  };

  // Add new content block
  const addBlock = (type) => {
    const newBlock = {
      id: Date.now().toString(),
      type,
      content: type === "image-grid" ? ["", ""] : ""
    };
    
    const newContent = [...content, newBlock];
    updateContent(newContent);
    setActiveBlockIndex(newContent.length - 1);
  };

  // Update specific block
  const updateBlock = (index, updates) => {
    const newContent = [...content];
    newContent[index] = { ...newContent[index], ...updates };
    updateContent(newContent);
  };

  // Remove block
  const removeBlock = (index) => {
    const newContent = content.filter((_, i) => i !== index);
    updateContent(newContent);
    setActiveBlockIndex(null);
  };

  // Move block up/down
  const moveBlock = (index, direction) => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === content.length - 1)
    ) {
      return;
    }
    
    const newContent = [...content];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    [newContent[index], newContent[targetIndex]] = [newContent[targetIndex], newContent[index]];
    updateContent(newContent);
    setActiveBlockIndex(targetIndex);
  };

  // Handle image upload
  const handleImageUpload = (index, gridIndex = null) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (gridIndex !== null) {
            // Update image grid
            const newContent = [...content];
            const gridImages = [...newContent[index].content];
            gridImages[gridIndex] = reader.result;
            newContent[index].content = gridImages;
            updateContent(newContent);
          } else {
            // Update single image
            updateBlock(index, { content: reader.result });
          }
        };
        reader.readAsDataURL(file);
      }
    };
    
    input.click();
  };

  // Render block based on type
  const renderBlock = (block, index) => {
    const isActive = activeBlockIndex === index;

    return (
      <div
        key={block.id}
        className={`editor-block ${isActive ? "active" : ""}`}
        onClick={() => setActiveBlockIndex(index)}
      >
        {/* Block Controls */}
        <div className="block-controls">
          <button
            type="button"
            className="block-control-btn"
            onClick={(e) => {
              e.stopPropagation();
              moveBlock(index, "up");
            }}
            disabled={index === 0}
            title="Move up"
          >
            ↑
          </button>
          <button
            type="button"
            className="block-control-btn"
            onClick={(e) => {
              e.stopPropagation();
              moveBlock(index, "down");
            }}
            disabled={index === content.length - 1}
            title="Move down"
          >
            ↓
          </button>
          <button
            type="button"
            className="block-control-btn block-control-delete"
            onClick={(e) => {
              e.stopPropagation();
              removeBlock(index);
            }}
            title="Delete block"
          >
            ×
          </button>
          <span className="block-type-label">{block.type}</span>
        </div>

        {/* Block Content */}
        <div className="block-content">
          {block.type === "paragraph" && (
            <textarea
              className="editor-textarea"
              value={block.content}
              onChange={(e) => updateBlock(index, { content: e.target.value })}
              placeholder="Write your paragraph here..."
              rows="4"
            />
          )}

          {block.type === "heading" && (
            <input
              type="text"
              className="editor-heading"
              value={block.content}
              onChange={(e) => updateBlock(index, { content: e.target.value })}
              placeholder="Enter heading text..."
            />
          )}

          {block.type === "quote" && (
            <textarea
              className="editor-quote"
              value={block.content}
              onChange={(e) => updateBlock(index, { content: e.target.value })}
              placeholder="Enter quote text..."
              rows="3"
            />
          )}

          {block.type === "image" && (
            <div className="editor-image-block">
              {block.content ? (
                <div className="editor-image-preview">
                  <img src={block.content} alt="Content" />
                  <button
                    type="button"
                    className="btn-change-image"
                    onClick={() => handleImageUpload(index)}
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn-upload-image"
                  onClick={() => handleImageUpload(index)}
                >
                  + Upload Image
                </button>
              )}
              <input
                type="text"
                className="editor-image-caption"
                value={block.caption || ""}
                onChange={(e) => updateBlock(index, { caption: e.target.value })}
                placeholder="Image caption (optional)..."
              />
            </div>
          )}

          {block.type === "image-grid" && (
            <div className="editor-image-grid">
              {block.content.map((img, gridIndex) => (
                <div key={gridIndex} className="editor-grid-item">
                  {img ? (
                    <div className="editor-grid-preview">
                      <img src={img} alt={`Grid ${gridIndex + 1}`} />
                      <button
                        type="button"
                        className="btn-change-grid-image"
                        onClick={() => handleImageUpload(index, gridIndex)}
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="btn-upload-grid-image"
                      onClick={() => handleImageUpload(index, gridIndex)}
                    >
                      + Upload
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="rich-text-editor">
      {/* Toolbar */}
      <div className="editor-toolbar">
        <button
          type="button"
          className="editor-toolbar-btn"
          onClick={() => addBlock("paragraph")}
          title="Add paragraph"
        >
          <span>¶</span> Paragraph
        </button>
        <button
          type="button"
          className="editor-toolbar-btn"
          onClick={() => addBlock("heading")}
          title="Add heading"
        >
          <span>H</span> Heading
        </button>
        <button
          type="button"
          className="editor-toolbar-btn"
          onClick={() => addBlock("quote")}
          title="Add quote"
        >
          <span>"</span> Quote
        </button>
        <button
          type="button"
          className="editor-toolbar-btn"
          onClick={() => addBlock("image")}
          title="Add image"
        >
          <span>🖼</span> Image
        </button>
        <button
          type="button"
          className="editor-toolbar-btn"
          onClick={() => addBlock("image-grid")}
          title="Add image grid"
        >
          <span>⊞</span> Image Grid
        </button>
      </div>

      {/* Content Blocks */}
      <div className="editor-content">
        {content.length === 0 ? (
          <div className="editor-empty">
            <p>Click a button above to start adding content blocks</p>
          </div>
        ) : (
          content.map((block, index) => renderBlock(block, index))
        )}
      </div>
    </div>
  );
}
