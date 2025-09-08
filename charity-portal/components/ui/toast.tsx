"use client";
import * as React from 'react';
import { create } from 'zustand';
import { cn } from '@/utils/cn';

export type ToastVariant = 'default' | 'success' | 'warning' | 'info' | 'destructive';

export interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
}

type ToastStore = {
  toasts: ToastItem[];
  show: (toast: ToastItem) => void;
  dismiss: (id: string) => void;
};

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  show: (toast) => set((state) => ({ toasts: [...state.toasts, toast] })),
  dismiss: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

function ToastView({ toast }: { toast: ToastItem }) {
  const dismiss = useToastStore((s) => s.dismiss);
  const color = {
    default: 'border',
    success: 'border-green-500',
    warning: 'border-yellow-500',
    info: 'border-blue-500',
    destructive: 'border-red-500',
  }[toast.variant ?? 'default'];
  React.useEffect(() => {
    const id = setTimeout(() => dismiss(toast.id), 3500);
    return () => clearTimeout(id);
  }, [toast.id, dismiss]);
  return (
    <div className={cn('w-full rounded-md border bg-background p-4 shadow', color)}>
      {toast.title && <div className="font-medium">{toast.title}</div>}
      {toast.description && <div className="text-sm text-muted-foreground">{toast.description}</div>}
    </div>
  );
}

export function ToastProvider() {
  const toasts = useToastStore((s) => s.toasts);
  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex flex-col items-end gap-2 p-4">
      {toasts.map((t) => (
        <ToastView key={t.id} toast={t} />
      ))}
    </div>
  );
}

