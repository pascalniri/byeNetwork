import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All site images are static files that only change via a deploy, so let the
    // optimizer cache its resized versions for a month instead of the 4h default.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
};

export default nextConfig;
