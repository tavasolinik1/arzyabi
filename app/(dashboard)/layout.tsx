"use client";

import { useAuthStore } from '@/stores/auth';
import { Sidebar } from '@/components/layout/sidebar';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen">
      <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-muted-900">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="font-semibold">Dashboard</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/tasks" className="text-sm">Tasks</Link>
          <Link href="/dashboard/settings" className="text-sm">Settings</Link>
          <Button variant="outline" size="sm" onClick={logout}>Logout</Button>
        </div>
      </header>
      <div className="flex">
        <Sidebar />
        <main className="container-padding mx-auto flex-1 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}