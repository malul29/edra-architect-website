import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['framer-motion', 'gsap'],
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, s-maxage=60, stale-while-revalidate=300',
                    },
                ],
            },
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
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        minimumCacheTTL: 31536000,
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
