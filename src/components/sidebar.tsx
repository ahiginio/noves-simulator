import { Button } from '@/components/ui/button';
import { menu } from '@/data/menu';
import { cn } from '@/lib/utils';
import { DefaultPageProps } from '@/t';
import { NavLink, useLocation } from 'react-router-dom';

export function Sidebar({ className }: DefaultPageProps) {
  const location = useLocation();
  return (
    <div className={cn('pb-12 h-[93.8vh]', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              asChild
              variant={
                cn({ ghost: location.pathname !== '/', secondary: location.pathname === '/' }) as
                  | 'ghost'
                  | 'secondary'
              }
              className="w-full justify-start">
              <NavLink to={'/'}>Inicio</NavLink>
            </Button>
            {menu.map((e, i) => {
              const activeRoute = location.pathname.includes(e.url);
              return (
                <Button
                  asChild
                  variant={
                    cn({ ghost: !activeRoute, secondary: activeRoute }) as 'ghost' | 'secondary'
                  }
                  key={i}
                  className="w-full justify-start">
                  <NavLink to={e.url}>
                    {e.icon}
                    {e.title}
                  </NavLink>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
