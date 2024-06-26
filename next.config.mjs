/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: "/",
            destination: "/books",
            permanent: true,

        }
    ]
};

export default nextConfig;
