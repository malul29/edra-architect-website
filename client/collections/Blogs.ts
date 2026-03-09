import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
    slug: 'blogs',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'tag', 'date', 'author'],
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
            admin: {
                description: 'Hero description shown at the top of the article',
            },
        },
        {
            name: 'date',
            type: 'text',
            required: true,
            admin: {
                description: 'Display date (e.g., "Feb 2026")',
            },
        },
        {
            name: 'tag',
            type: 'select',
            required: true,
            options: [
                { label: 'Architecture', value: 'Architecture' },
                { label: 'Interior', value: 'Interior' },
                { label: 'Construction', value: 'Construction' },
                { label: 'Design', value: 'Design' },
                { label: 'Studio', value: 'Studio' },
                { label: 'Projects', value: 'Projects' },
                { label: 'Awards', value: 'Awards' },
                { label: 'Press', value: 'Press' },
            ],
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'Featured image',
            },
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: true,
        },
        {
            name: 'author',
            type: 'text',
        },
        {
            name: 'content',
            type: 'richText',
        },
    ],
}
