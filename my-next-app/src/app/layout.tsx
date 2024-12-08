// app/layout.tsx
import Footer from './component/Footer';
import { SiteHeader } from './component/Header';
import Navbar from './component/Navbar';
import './globals.css'; // Adjust based on your global styles file path
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Application',
  description: 'This is my Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <SiteHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
