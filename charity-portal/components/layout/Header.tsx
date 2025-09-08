"use client";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

export function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="h-6 w-6 rounded bg-primary" />
          Charity Evaluation Portal
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline">{user.name} ({user.role})</span>
              <Button variant="outline" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link className="text-sm" href="/login">Login</Link>
              <Link className="text-sm" href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

