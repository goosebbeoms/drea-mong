import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
// import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    react(),
    // mkcert(),
    VitePWA({
      // PWA 플러그인 설정
      strategies: 'injectManifest', // 서비스 워커 전략: 사용자 정의 서비스 워커 사용
      srcDir: 'public', // 서비스 워커 파일 위치
      filename: 'service-worker.js', // 서비스 워커 파일명
      registerType: 'autoUpdate', // 서비스 워커 자동 업데이트 설정
      devOptions: {
        // 개발 환경 옵션
        enabled: true, // 개발 중에도 PWA 활성화
        type: 'module', // ES 모듈 형식 사용
      },
      workbox: {
        // Workbox 설정
        cleanupOutdatedCaches: false, // 오래된 캐시 자동 정리 비활성화
        sourcemap: true, // 소스맵 생성 활성화
      },
      includeAssets: ['apple-touch-icon.png'],
      manifest: {
        name: '드리-몽',
        short_name: '드리-몽',
        description: 'AI-based dream interpretation app',
        theme_color: '#737DFE',
        icons: [
          {
            src: '/drea-mong_192px.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: '/drea-mong_512px.png',
            type: 'image/png',
            sizes: '512x512',
          },
          {
            src: '/apple-touch-icon.png',
            type: 'image/png',
            size: '180x180',
          },
        ],
      },
    }),
  ],
});
