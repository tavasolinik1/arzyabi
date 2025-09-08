"use client";
import * as React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ToastProvider } from '@/components/ui/toast';

export default function LoginPage() {
  const { login, loading, error, isAuthenticated, user } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    // Prefill one of the sample accounts to help demo
    setEmail('admin@charity.org');
    setPassword('admin123');
  }, []);

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-6">
      <ToastProvider />
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-muted-foreground">Use a sample account to explore the portal.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button className="w-full" disabled={loading} onClick={() => login(email, password)}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          No account? <Link href="/register" className="underline">Register</Link>
        </p>
      </div>
    </div>
  );
}

