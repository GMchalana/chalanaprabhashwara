import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chalana Prabhashwara Portfolio',
    short_name: 'Chalana P.',
    description: 'Portfolio of Chalana Prabhashwara, a Software Engineer & Full-Stack Developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  };
}
