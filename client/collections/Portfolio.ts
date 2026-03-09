import type { CollectionConfig } from 'payload'

export const Portfolio: CollectionConfig = {
    slug: 'portfolio',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'location', 'year'],
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
            name: 'slug',
            type: 'text',
            unique: true,
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (!value && data?.title) {
                            return data.title
                                .toLowerCase()
                                .trim()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/^-|-$/g, '')
                        }
                        return value
                    },
                ],
            },
        },
        {
            name: 'location',
            type: 'text',
            required: true,
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            options: [
                { label: 'High Rise', value: 'High Rise' },
                { label: 'Mall', value: 'Mall' },
                { label: 'Residence', value: 'Residence' },
                { label: 'Private House', value: 'Private House' },
                { label: 'Office', value: 'Office' },
                { label: 'Public Facility', value: 'Public Facility' },
                { label: 'Interior', value: 'Interior' },
            ],
        },
        {
            name: 'year',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'Main project image',
            },
        },
        {
            name: 'gallery',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                    admin: {
                        description: 'Gallery image',
                    },
                },
            ],
        },
    ],
}
