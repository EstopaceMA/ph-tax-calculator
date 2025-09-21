import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'toggle';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', active = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',

          // Size variants
          {
            'px-2 py-1 text-xs': size === 'sm',
            'px-3 py-2 text-sm': size === 'md',
            'px-4 py-3 text-base': size === 'lg',
          },

          // Variant styles
          {
            'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300': variant === 'primary',
            'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 disabled:bg-gray-50': variant === 'secondary',
            'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500': variant === 'ghost',
            'bg-gray-100 text-gray-600 hover:text-gray-900 data-[active=true]:bg-white data-[active=true]:text-gray-900 data-[active=true]:shadow-sm': variant === 'toggle',
          },

          // Active state for toggle variant
          {
            'bg-white text-gray-900 shadow-sm': variant === 'toggle' && active,
          },

          className
        )}
        ref={ref}
        data-active={active}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };