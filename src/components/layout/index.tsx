import * as React from 'react';
import { Icons } from '@/components/icons';
import { TooltipProvider } from '../ui/tooltip';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider>
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
            <div className="container py-10">{children}</div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
