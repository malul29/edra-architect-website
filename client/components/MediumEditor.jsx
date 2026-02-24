import React, { useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Document from '@tiptap/extension-document';

// Kustomisasi Document untuk memaksa baris pertama selalu menjadi Heading 1 (Title)
const CustomDocument = Document.extend({
    content: 'heading block*',
});

// Ikon SVG sederhana agar tidak perlu menginstall library tambahan
const Icons = {
    Bold: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg>,
    Italic: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg>,
    Link: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
    H1: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M17 12l3-2v8"></path></svg>,
    H2: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"></path></svg>,
    Quote: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25-.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>,
    Plus: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>,
    Image: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>,
    Divider: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>,
    Code: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
};

export default function MediumEditor({ initialContent = "", onChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const editor = useEditor({
        immediatelyRender: false,
        content: initialContent || "<h1></h1><p></p>", // Struktur awal
        editorProps: {
            attributes: {
                // Styling area utama menggunakan Tailwind Typography
                class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] font-serif text-gray-800 leading-relaxed',
            },
        },
        onUpdate: ({ editor }) => {
            // Mengembalikan HTML setiap kali ada perubahan
            if (onChange) {
                onChange(editor.getHTML());
            }
        },
        extensions: [
            CustomDocument,
            StarterKit.configure({
                document: false, // Gunakan CustomDocument di atas
                history: false,
            }),
            Image,
            Link.configure({
                openOnClick: false,
            }),
            Placeholder.configure({
                // Konfigurasi dinamis untuk placeholder
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading' && node.attrs.level === 1) {
                        return 'Title';
                    }
                    return 'Tell your story...';
                },
                // Styling CSS bawaan untuk placeholder
                emptyNodeClass: 'before:content-[attr(data-placeholder)] before:float-left before:h-0 before:pointer-events-none before:text-gray-300',
            }),
        ],
    });

    const addImage = useCallback(() => {
        const url = window.prompt('Masukkan URL gambar:');
        if (url && editor) {
            editor.chain().focus().setImage({ src: url }).run();
        }
        setIsMenuOpen(false);
    }, [editor]);

    const addDivider = useCallback(() => {
        if (editor) {
            editor.chain().focus().setHorizontalRule().run();
        }
        setIsMenuOpen(false);
    }, [editor]);

    const addCodeBlock = useCallback(() => {
        if (editor) {
            editor.chain().focus().toggleCodeBlock().run();
        }
        setIsMenuOpen(false);
    }, [editor]);

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL Tautan:', previousUrl);

        // Batal
        if (url === null) return;

        // Hapus jika kosong
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }, [editor]);

    if (!editor) return null;

    return (
        <div className="w-full flex justify-center py-16 px-4 sm:px-8 bg-white min-h-screen">
            {/* Container utama dengan lebar maksimum Medium (sekitar 700-800px) */}
            <div className="w-full max-w-3xl relative">

                {/* BUBBLE MENU - Muncul saat teks diseleksi */}
                {editor && (
                    <BubbleMenu
                        className="flex items-center gap-1 bg-gray-900 shadow-xl rounded-lg px-2 py-1.5 transition-opacity duration-200"
                        tippyOptions={{ duration: 150, animation: 'fade' }}
                        editor={editor}
                    >
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            isActive={editor.isActive('bold')}
                            icon={<Icons.Bold />}
                        />
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            isActive={editor.isActive('italic')}
                            icon={<Icons.Italic />}
                        />
                        <MenuButton
                            onClick={setLink}
                            isActive={editor.isActive('link')}
                            icon={<Icons.Link />}
                        />
                        <div className="w-[1px] h-5 bg-gray-700 mx-1"></div>
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                            isActive={editor.isActive('heading', { level: 1 })}
                            icon={<Icons.H1 />}
                        />
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            isActive={editor.isActive('heading', { level: 2 })}
                            icon={<Icons.H2 />}
                        />
                        <MenuButton
                            onClick={() => editor.chain().focus().toggleBlockquote().run()}
                            isActive={editor.isActive('blockquote')}
                            icon={<Icons.Quote />}
                        />
                    </BubbleMenu>
                )}

                {/* FLOATING MENU - Muncul di margin kiri pada baris baru yang kosong */}
                {editor && (
                    <FloatingMenu
                        className="flex items-center gap-2 transform -translate-x-[110%] absolute left-0"
                        tippyOptions={{ duration: 150, placement: 'left-start' }}
                        editor={editor}
                    >
                        <div className="relative flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-500 transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 block' : ''}`}
                                title="Add an element"
                            >
                                <Icons.Plus />
                            </button>

                            {/* Sub-menu Item yang muncul saat ikon Plus diklik */}
                            <div
                                className={`flex items-center gap-2 transition-all duration-300 ease-in-out origin-left ${isMenuOpen ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 -translate-x-4 pointer-events-none'}`}
                            >
                                <ActionButton onClick={addImage} icon={<Icons.Image />} title="Add an image" />
                                <ActionButton onClick={addDivider} icon={<Icons.Divider />} title="Add a divider" />
                                <ActionButton onClick={addCodeBlock} icon={<Icons.Code />} title="Add code block" />
                            </div>
                        </div>
                    </FloatingMenu>
                )}

                {/* TIPTAP EDITOR CONTENT */}
                <div className={`
          [&_h1]:font-sans [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:text-gray-900 [&_h1]:tracking-tight
          [&_h2]:font-sans [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-gray-800
          [&_p]:font-serif [&_p]:text-[20px] [&_p]:leading-[32px] [&_p]:mb-6 [&_p]:text-gray-800
          [&_blockquote]:border-l-4 [&_blockquote]:border-gray-900 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:font-serif [&_blockquote]:text-xl [&_blockquote]:text-gray-600 [&_blockquote]:my-8
          [&_img]:max-w-full [&_img]:rounded-md [&_img]:my-8
          [&_hr]:border-t [&_hr]:border-gray-300 [&_hr]:my-10
          [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:rounded-md [&_pre]:font-mono [&_pre]:text-sm [&_pre]:my-6 [&_pre]:overflow-x-auto
          [&_a]:underline [&_a]:text-gray-900 [&_a]:underline-offset-4
        `}>
                    <EditorContent editor={editor} />
                </div>

            </div>
        </div>
    );
}

// Komponen Pembantu untuk Tombol Bubble Menu
function MenuButton({ onClick, isActive, icon }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`p-1.5 rounded-md flex items-center justify-center transition-colors duration-200 ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
        >
            {icon}
        </button>
    );
}

// Komponen Pembantu untuk Tombol Floating Menu
function ActionButton({ onClick, icon, title }) {
    return (
        <button
            type="button"
            onClick={onClick}
            title={title}
            className="w-9 h-9 rounded-full border border-green-500 bg-white text-green-600 flex items-center justify-center hover:bg-green-50 transition-colors duration-200"
        >
            {icon}
        </button>
    );
}
