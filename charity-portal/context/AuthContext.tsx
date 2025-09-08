"use client";
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Role, User } from '@/utils/types';
import { sampleUsers } from '@/data/sample';
import { useToastStore } from '@/components/ui/toast';

type AuthContextValue = {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, role: Role) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const show = useToastStore((s) => s.show);

  React.useEffect(() => {
    const raw = typeof window !== 'undefined' ? localStorage.getItem('auth_user') : null;
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const login = React.useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    await new Promise((r) => setTimeout(r, 400));
    const found = sampleUsers.find((u) => u.email === email && u.password === password);
    if (!found) {
      setLoading(false);
      setError('Invalid credentials');
      show({ id: 'loginFailure', title: 'Login failed', description: 'Invalid credentials. Please try again.', variant: 'destructive' });
      return false;
    }
    setUser(found);
    localStorage.setItem('auth_user', JSON.stringify(found));
    setLoading(false);
    show({ id: 'loginSuccess-' + Date.now(), title: 'Welcome back!', description: 'You have successfully logged in.', variant: 'success' });
    router.push(`/${found.role}`);
    return true;
  }, [router, show]);

  const register = React.useCallback(async (name: string, email: string, password: string, role: Role) => {
    setLoading(true);
    setError(null);
    await new Promise((r) => setTimeout(r, 400));
    const exists = sampleUsers.some((u) => u.email === email);
    if (exists) {
      setLoading(false);
      setError('Email already registered');
      show({ id: 'reg-fail', title: 'Registration failed', description: 'Email already exists.', variant: 'destructive' });
      return false;
    }
    const newUser: User = { id: 'u-' + Date.now(), name, email, password, role };
    setUser(newUser);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
    setLoading(false);
    show({ id: 'reg-success', title: 'Account created', description: 'Welcome to the portal!', variant: 'success' });
    router.push(`/${role}`);
    return true;
  }, [router, show]);

  const logout = React.useCallback(() => {
    setUser(null);
    localStorage.removeItem('auth_user');
    show({ id: 'logout-' + Date.now(), title: 'Signed out', description: 'You have been logged out.', variant: 'info' });
    router.push('/');
  }, [router, show]);

  const value: AuthContextValue = {
    isAuthenticated: Boolean(user),
    user,
    loading,
    error,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

