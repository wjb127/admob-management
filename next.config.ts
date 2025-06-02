import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 파일 캐시 비활성화
  async headers() {
    return [
      {
        source: '/app-ads.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
