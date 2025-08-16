"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth';

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuthenticated) {
    router.replace('/dashboard');
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-muted-900">
      <h1 className="mb-4 text-xl font-semibold">Login</h1>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          login({ email, password });
          router.push('/dashboard');
        }}
      >
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div className="flex items-center justify-between">
          <a className="text-sm text-primary-600" href="/forgot-password">Forgot password?</a>
          <Button type="submit">Login</Button>
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        No account? <a className="text-primary-600" href="/register">Register</a>
      </p>
    </div>
  );
}