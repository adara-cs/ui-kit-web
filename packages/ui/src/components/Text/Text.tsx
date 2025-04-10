import { ElementType, ReactNode } from 'react';

import { csx } from '@adara-cs/utils';
import { PolymorphicComponentPropWithRef } from '@adara-cs/types';
import style from './style.module.css'

export type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export type TextProps<T extends ElementType = 'span'> = PolymorphicComponentPropWithRef<T, {
  className?: string
  children?: ReactNode | ReactNode[]
  size?: TextSize
  fontWeight?: 400 | 500 | 600 | 700 | 900
}>

type TextComponent = <T extends ElementType = 'span'>(props: TextProps<T>) => ReactNode | null;

export const Text: TextComponent = <T extends ElementType>({
  as,
  className,
  size = 3,
  fontWeight,
  children,
  ref,
  ...props
}: TextProps<T>) => {
  const Element = as || 'span';

  return (
    <Element className={csx(style.text, className)} data-fontweight={fontWeight} data-size={size} {...props} ref={ref}>
      {children}
    </Element>
  );
}