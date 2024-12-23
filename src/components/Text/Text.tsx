import { ComponentPropsWithRef, ElementType } from 'react';

import style from './style.module.css'
import { csx } from '../../utils/css';

export interface TextProps<T extends ElementType = 'span'> {
  className?: string
  as?: T;
  children?: string | string[]
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
  fontWeight?: 400 | 500 | 700 | 900
}

export const Text = <T extends ElementType = 'span'>({ as, className, size = 3, fontWeight, children, ...props }: TextProps<T> & Omit<ComponentPropsWithRef<T>, keyof TextProps<T>>) => {
  const Element = as || 'span';

  return (
    <Element className={csx(style.text, className)} data-fontweight={fontWeight} data-size={size} {...props}>
      {children}
    </Element>
  );
}