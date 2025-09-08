"use client";
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import * as React from 'react';

export function SettingsPanel() {
  const { user } = useAuth();
  const [name, setName] = React.useState(user?.name ?? '');
  return (
    <div className="max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button disabled>Save (demo)</Button>
    </div>
  );
}

