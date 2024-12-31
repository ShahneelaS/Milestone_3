'use client';

import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar'; // Navbar component
import { ReactNode } from 'react';
import Footer from '../components/Footer';

const LayoutContent = ({ children }: { children: ReactNode }) => {
  return <>{children}</>; // LayoutContent should only render the children
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider> {/* Wrap the entire layout with CartProvider */}
          <Navbar /> {/* Render Navbar once here */}
          <LayoutContent>{children}</LayoutContent> {/* Render the page content here */}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}
