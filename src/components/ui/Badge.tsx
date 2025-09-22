import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'gray';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <span
        className={cn(
          // Base styles
          'inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap',

          // Size variants
          {
            'px-2 py-1 text-xs': size === 'sm',
            'px-2.5 py-1 text-sm': size === 'md',
          },

          // Color variants
          {
            'bg-gray-100 text-gray-800': variant === 'default' || variant === 'gray',
            'bg-blue-100 text-blue-800': variant === 'blue',
            'bg-green-100 text-green-800': variant === 'green',
            'bg-yellow-100 text-yellow-800': variant === 'yellow',
            'bg-red-100 text-red-800': variant === 'red',
            'bg-purple-100 text-purple-800': variant === 'purple',
          },

          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };