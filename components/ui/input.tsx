"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, helpText, id, ...props }, ref) => {
    const inputId = id ?? React.useId();
    return (
      <div className={cn('w-full space-y-1.5', className)}>
        {label ? (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        ) : null}
        <input
          id={inputId}
          ref={ref}
          type={type}
          className={cn(
            'block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-muted-900 dark:text-gray-100'
          )}
          {...props}
        />
        {helpText ? <p className="text-xs text-gray-500 dark:text-gray-400">{helpText}</p> : null}
      </div>
    );
  }
);
Input.displayName = 'Input';