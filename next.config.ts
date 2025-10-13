import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        qualities: [75, 80, 85, 90, 95, 100], // Add the quality values you want to support
    },
};

export default nextConfig;
