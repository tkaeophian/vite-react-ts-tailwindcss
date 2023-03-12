import * as React from 'react';

import { ButtonProps } from './Button.Props';
import { Spinner } from '@/components/Elements';
import clsx from 'clsx';

export const variants = {
  primary: 'bg-blue-600 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

export const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading && <Spinner size="sm" className="text-current" />}
      {!isLoading && startIcon}
      <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
    </button>
  )
);

Button.displayName = 'Button';
