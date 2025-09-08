"use client";
import * as React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import Link from 'next/link';
import { ToastProvider } from '@/components/ui/toast';

export default function RegisterPage() {
  const { register, loading, error } = useAuth();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState<'admin' | 'evaluator' | 'ngo'>('ngo');

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-6">
      <ToastProvider />
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Create account</h1>
          <p className="text-sm text-muted-foreground">Register a demo user to explore the portal.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select id="role" value={role} onChange={(e) => setRole(e.target.value as any)}>
              <option value="admin">Admin</option>
              <option value="evaluator">Evaluator</option>
              <option value="ngo">NGO</option>
            </Select>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button className="w-full" disabled={loading} onClick={() => register(name, email, password, role)}>
            {loading ? 'Creating...' : 'Register'}
          </Button>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Have an account? <Link href="/login" className="underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

