/** @type {import('next').NextConfig} */
const nextConfig = {
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
    async rewrites() {
        // In production: set NEXT_PUBLIC_API_URL to your Railway URL
        // In development: falls back to localhost:5000
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        return [
            {
                source: '/api/:path*',
                destination: `${apiUrl}/api/:path*`,
            },
        ];
    },
};

export default nextConfig;
