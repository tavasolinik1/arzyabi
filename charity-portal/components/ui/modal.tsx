import * as React from 'react';
import { cn } from '@/utils/cn';

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function Modal({ open, onOpenChange, title, description, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      <div className={cn('relative z-10 w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg')}>
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

