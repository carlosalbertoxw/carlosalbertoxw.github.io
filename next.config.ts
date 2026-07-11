import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Export estático: `next build` genera el sitio completo en out/ para GitHub Pages
  output: 'export',
  reactStrictMode: true,
  // Cada ruta se exporta como carpeta/index.html, el formato que espera GitHub Pages
  trailingSlash: true,
  images: {
    // El optimizador de imágenes de Next requiere servidor; en export estático se desactiva
    unoptimized: true
  },
  experimental: {
    sri: {
      algorithm: 'sha256'
    }
  }
};

export default nextConfig;
