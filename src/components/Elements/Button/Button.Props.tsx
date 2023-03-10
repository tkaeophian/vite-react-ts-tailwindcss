import * as React from 'react';

import { sizes, variants } from './Button';

type IconProps = { startIcon?: JSX.Element; endIcon?: JSX.Element };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;
