"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useThemeStore } from '@/stores/theme';
import { useAuthStore } from '@/stores/auth';

export function Navbar() {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const toggleDirection = useThemeStore((s) => s.toggleDirection);
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <header className="container-padding sticky top-0 z-40 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md dark:border-gray-800 dark:bg-muted-900/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-semibold">Next14 Starter</Link>
          <nav className="hidden gap-4 sm:flex">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggleTheme}>Theme</Button>
          <Button variant="ghost" size="sm" onClick={toggleDirection}>RTL</Button>
          {isAuthenticated ? (
            <Button size="sm" onClick={logout}>Logout</Button>
          ) : (
            <>
              <Link href="/login" className="text-sm">Login</Link>
              <Link href="/register" className="text-sm">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}