import { Icons } from '@/components/icons';
import { Sidebar } from '@/components/sidebar';

export default function DashboardLayout({children,
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
            <div className="grid lg:grid-cols-6">
              <Sidebar className="hidden lg:block col-span-1" />
              <div className="col-span-3 lg:col-span-5 lg:border-l">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
