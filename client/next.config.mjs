import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['framer-motion', 'gsap'],
    },
    async headers() {
        const noStore = {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        }

        return [
            { source: '/', headers: [noStore] },
            { source: '/about', headers: [noStore] },
            { source: '/services', headers: [noStore] },
            { source: '/projects', headers: [noStore] },
            { source: '/project/:id*', headers: [noStore] },
            { source: '/blogs', headers: [noStore] },
            { source: '/blog/:id*', headers: [noStore] },
            { source: '/contact', headers: [noStore] },
        ]
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/api/media/file/:path*',
                    destination: '/media/:path*',
                },
            ],
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
        ],
    },
};

export default withPayload(nextConfig);
