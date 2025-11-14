import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Streaming Dashboard',
  description: 'Modern streaming dashboard using Next.js, Tailwind, and TMDB API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}