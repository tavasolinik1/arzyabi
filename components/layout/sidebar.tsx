"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/tasks', label: 'Tasks' },
  { href: '/dashboard/settings', label: 'Settings' },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-muted-900 md:block">
      <div className="p-4">
        <div className="mb-4 text-sm font-semibold text-gray-500 dark:text-gray-400">Dashboard</div>
        <nav className="space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                pathname === l.href && 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}