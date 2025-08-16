"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-muted-900">
      <h1 className="mb-4 text-xl font-semibold">Forgot Password</h1>
      {sent ? (
        <p className="text-sm text-gray-600 dark:text-gray-400">If an account exists, a reset link has been sent.</p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <div className="flex items-center justify-end">
            <Button type="submit">Send reset link</Button>
          </div>
        </form>
      )}
    </div>
  );
}