import React from 'react';
import { cn } from '@/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    return (
      <div
        className={cn(
          // Base styles
          'bg-white rounded-xl',

          // Variant styles
          {
            'shadow-lg': variant === 'default',
            'border border-gray-200': variant === 'outlined',
            'shadow-xl': variant === 'elevated',
          },

          // Padding variants
          {
            'p-0': padding === 'none',
            'p-3 sm:p-4': padding === 'sm',
            'p-4 sm:p-6': padding === 'md',
            'p-6 sm:p-8': padding === 'lg',
          },

          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Sub-components for better composition
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-3 mb-4 sm:mb-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('text-lg sm:text-xl font-semibold text-gray-900', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm sm:text-base text-gray-600', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('space-y-4', className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

export { Card, CardHeader, CardTitle, CardDescription, CardContent };