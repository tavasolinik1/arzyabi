import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className="h-4 w-4 rounded border border-input text-primary focus:ring-ring"
      {...props}
    />
  );
}

