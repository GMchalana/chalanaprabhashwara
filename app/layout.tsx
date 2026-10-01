import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Providers } from './providers';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  title: {
    default: 'Chalana Prabhashwara | Software Engineer & Full-Stack Developer',
    template: '%s | Chalana Prabhashwara',
  },
  description: 'Chalana Prabhashwara is a professional Software Engineer and Full-Stack Developer from Sri Lanka. Specializing in React, Next.js, TypeScript, and modern web solutions.',
  keywords: [
    'Chalana Prabhashwara',
    'Software Engineer Sri Lanka',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Specialist',
    'TypeScript Engineer',
    'Web Development Portfolio',
    'Axonall Global',
    'DennamLK',
  ],
  authors: [{ name: 'Chalana Prabhashwara', url: 'https://chalana.miraqlabs.com' }],
  creator: 'Chalana Prabhashwara',
  publisher: 'Chalana Prabhashwara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chalana.miraqlabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chalana.miraqlabs.com',
    title: 'Chalana Prabhashwara | Software Engineer & Full-Stack Developer',
    description: 'Explore the portfolio of Chalana Prabhashwara, a Software Engineer specializing in building premium web applications.',
    siteName: 'Chalana Prabhashwara',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chalana Prabhashwara Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chalana Prabhashwara | Software Engineer',
    description: 'Software Engineer & Full-Stack Developer specializing in modern web technologies.',
    images: ['/og-image.png'],
    creator: '@GMchalana',
  },
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
              "url": "https://chalana.miraqlabs.com",
              "image": "https://chalana.miraqlabs.com/profile.jpg",
              "sameAs": [
                "https://github.com/GMchalana",
                "https://www.linkedin.com/in/chalana-prabhashwara/",
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
                "Software Engineering",
                "Web Development",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Cloud Infrastructure"
              ],
              "description": "Professional Software Engineer and Full-Stack Developer specializing in modern web technologies and premium user experiences."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Chalana Prabhashwara",
              "alternateName": ["Chalana Portfolio", "Chalana Prabhashwara Software Engineer"],
              "url": "https://chalana.miraqlabs.com/",
              "author": "Chalana Prabhashwara",
              "description": "Portfolio of Chalana Prabhashwara, a Software Engineer & Full-Stack Developer."
            })
          }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
