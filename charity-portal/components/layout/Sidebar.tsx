"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { moduleMeta, roleModules } from '@/utils/roles';
import { useAuth } from '@/context/AuthContext';
import * as Icons from 'lucide-react';
import { cn } from '@/utils/cn';

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const role = user?.role ?? 'admin';
  const modules = roleModules[role];

  return (
    <aside className="hidden w-64 shrink-0 border-r p-4 md:block">
      <nav className="space-y-1">
        {modules.map((m) => {
          const meta = moduleMeta[m];
          const href = `/${role}/${m === 'dashboard' ? '' : m}`.replace(/\/$/, '');
          const active = pathname === href;
          const Icon = (Icons as any)[meta.icon] as React.ComponentType<{ className?: string }>;
          return (
            <Link
              key={m}
              href={href}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground',
                active && 'bg-accent text-accent-foreground'
              )}
            >
              {Icon ? <Icon className="h-4 w-4" /> : null}
              {meta.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

