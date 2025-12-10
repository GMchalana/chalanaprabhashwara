import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chalana Prabhashwara - Software Engineer & Full-Stack Developer',
  description: 'Chalana Prabhashwara is a skilled Software Engineer and Full-Stack Developer specializing in modern web technologies, React, Next.js, and cloud solutions. Browse portfolio projects and career history.',
  keywords: [
    'Chalana Prabhashwara',
    'Chalana',
    'Prabhashwara',
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer',
    'Sri Lanka Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'Portfolio',
    'Axonall Global',
    'DennamLK',
    'Agro World',
    'Efito Solutions'
  ].join(', '),
  authors: [{ name: 'Chalana Prabhashwara' }],
  creator: 'Chalana Prabhashwara',
  publisher: 'Chalana Prabhashwara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chalanaprabhashwara.vercel.app/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chalanaprabhashwara.vercel.app/', // Replace with your actual domain
    title: 'Chalana Prabhashwara - Software Engineer & Full-Stack Developer',
    description: 'Skilled Software Engineer and Full-Stack Developer specializing in modern web technologies, React, Next.js, and cloud solutions.',
    siteName: 'Chalana Prabhashwara Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Create an OG image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Chalana Prabhashwara - Software Engineer',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Chalana Prabhashwara - Software Engineer & Full-Stack Developer',
  //   description: 'Skilled Software Engineer and Full-Stack Developer specializing in modern web technologies.',
  //   images: ['/og-image.jpg'], // Same as OG image
  //   creator: '@chalanaprabha', // Replace with your Twitter handle if available
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        <meta name="google-site-verification" content="Qq5BLSTKcVdxW4AzFovtUMXvWqGSr9QUNlT4n8kBJSI" />
        {/* Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chalana Prabhashwara",
              "jobTitle": "Software Engineer",
              "url": "https://chalanaprabhashwara.com", // Replace with your domain
              "sameAs": [
                "https://github.com/yourusername", // Add your GitHub
                "https://linkedin.com/in/yourusername", // Add your LinkedIn
                "https://twitter.com/yourusername" // Add your Twitter
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Axonall Global"
                },
                {
                  "@type": "Organization", 
                  "name": "DennamLK (Pvt) Ltd"
                }
              ],
              "knowsAbout": [
                "Software Development",
                "Web Development", 
                "Full-Stack Development",
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Cloud Infrastructure"
              ],
              "description": "Software Engineer and Full-Stack Developer specializing in modern web technologies"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
