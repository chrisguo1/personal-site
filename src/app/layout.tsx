import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

// Geist for both body and headings — see globals.css.
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Chris Guo',
    template: '%s | Chris Guo',
  },
  description: "Chris Guo's personal site.",
};

// Static inline script to prevent flash of wrong theme.
// This is a hardcoded string with no user input — safe to inline.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geist.variable} min-h-screen`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded">
          Skip to main content
        </a>
        <div className="mx-auto max-w-2xl px-6 py-12">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
