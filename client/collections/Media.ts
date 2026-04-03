import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    upload: {
        staticDir: './public/media',
        // Cap the stored original to 2560px wide & convert to WebP
        // This alone can reduce file size by 50-80% vs raw PNG/JPG uploads
        resizeOptions: {
            width: 2560,
            withoutEnlargement: true,
        },
        formatOptions: {
            format: 'webp',
            options: {
                quality: 82,
            },
        },
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: { quality: 72 },
                },
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: { quality: 78 },
                },
            },
            {
                name: 'full',
                width: 1920,
                position: 'centre',
                formatOptions: {
                    format: 'webp',
                    options: { quality: 80 },
                },
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
        focalPoint: true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
}
