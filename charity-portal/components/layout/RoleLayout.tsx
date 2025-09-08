"use client";
import * as React from 'react';
import { useAuth } from '@/context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { isModuleAllowed } from '@/utils/roles';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ToastProvider, useToastStore } from '@/components/ui/toast';

export default function RoleLayout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const show = useToastStore((s) => s.show);

  React.useEffect(() => {
    if (!isAuthenticated) return;
    const match = pathname.match(/^\/(admin|evaluator|ngo)(?:\/(.*))?$/);
    if (!match) return;
    const role = match[1] as 'admin' | 'evaluator' | 'ngo';
    const module = (match[2] ?? 'dashboard').replace(/\/$/, '') || 'dashboard';
    if (user && user.role !== role) {
      show({ id: 'routeGuard-' + Date.now(), title: 'Redirected', description: 'You were redirected to your dashboard.', variant: 'info' });
      router.replace(`/${user.role}`);
      return;
    }
    if (user && !isModuleAllowed(user.role, module)) {
      show({ id: 'unauth-' + Date.now(), title: 'Unauthorized', description: 'You do not have access to this resource.', variant: 'warning' });
      router.replace('/unauthorized');
    }
  }, [pathname, router, user, isAuthenticated, show]);

  return (
    <div className="min-h-screen">
      <ToastProvider />
      <Header />
      <div className="mx-auto flex max-w-7xl">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}

