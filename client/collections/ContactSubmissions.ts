import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
    slug: 'contact-submissions',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'service', 'createdAt'],
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'service',
            type: 'text',
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
        },
    ],
}
