'use client';
import * as React from 'react';
import { Icons } from '@/components/icons';
import { TooltipProvider } from '../ui/tooltip';
import { store } from '@/store';
import { Provider } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <TooltipProvider>
        <div className="hidden container-fluid px-20 flex-col md:flex">
          <div className="flex flex-row items-center justify-between border-b">
            <div
              className="flex h-[6vh] items-center justify-between px-4"
              onClick={() => router.push('/')}>
              <Icons.logo className="h-8 w-8" />
            </div>
            <div className="" onClick={() => router.push('/transactions')}>
              Transacciones
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Top Menu */}
          <div className="border-t">
            <div className="bg-background">
              <div className="container py-10">{children}</div>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </Provider>
  );
}
