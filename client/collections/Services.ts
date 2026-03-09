import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
    slug: 'services',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'subtitle'],
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
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'Service image',
            },
        },
        {
            name: 'features',
            type: 'array',
            fields: [
                {
                    name: 'feature',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
