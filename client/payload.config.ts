import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'

import { Media } from './collections/Media.ts'
import { Portfolio } from './collections/Portfolio.ts'
import { Blogs } from './collections/Blogs.ts'

import { ContactSubmissions } from './collections/ContactSubmissions.ts'

const blobTokenRaw = process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_BLOB_READ_WRITE_TOKEN
const blobToken = /^vercel_blob_rw_[a-z\d]+_[a-z\d]+$/i.test(blobTokenRaw || '') ? blobTokenRaw : undefined

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
        ContactSubmissions,
    ],
    editor: lexicalEditor(),
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || '',
        },
        push: true,
    }),
    // Keep plugin always registered so importMap is stable across build/runtime envs.
    plugins: [
        vercelBlobStorage({
            token: blobToken,
            clientUploads: true,
            collections: {
                media: true,
            },
            alwaysInsertFields: true,
        }),
    ],
    sharp,
    typescript: {
        outputFile: 'payload-types.ts',
    },
})
