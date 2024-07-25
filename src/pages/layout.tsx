// src/pages/layout.tsx

import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
};

export default Layout;