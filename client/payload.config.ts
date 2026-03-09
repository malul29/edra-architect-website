import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { Media } from './collections/Media.ts'
import { Portfolio } from './collections/Portfolio.ts'
import { Blogs } from './collections/Blogs.ts'
import { Services } from './collections/Services.ts'

export default buildConfig({
    secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
    admin: {
        user: 'users',
        meta: {
            titleSuffix: '- EDRA Architect CMS',
        },
    },
    collections: [
        {
            slug: 'users',
            auth: true,
            admin: {
                useAsTitle: 'email',
            },
            access: {
                read: () => true,
            },
            fields: [],
        },
        Media,
        Portfolio,
        Blogs,
        Services,
    ],
    editor: lexicalEditor(),
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || '',
        },
    }),
    sharp,
    typescript: {
        outputFile: 'payload-types.ts',
    },
})
