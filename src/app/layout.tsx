import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import cors from 'cors';

import { cn } from '@/lib/utils';
import DashboardLayout from '@/components/layout';
import axios from 'axios';
const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Noves | simulator',
  description: 'Noves transaction simulator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
