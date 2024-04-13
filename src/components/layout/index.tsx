import * as React from 'react';
import { Icons } from '@/components/icons';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-[6vh] items-center justify-between px-4">
            <Icons.logo className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        {/* Top Menu */}
        <div className="border-t">
          <div className="bg-background">
            <div className="flex justify-center items-center">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
