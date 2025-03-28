'use client';
import { ElementType, ReactNode } from 'react';
import { csx } from '@adara-cs/utils';
import style from './style.module.css';
import { PolymorphicComponentPropWithRef } from '@adara-cs/types';
import { useCollapsibleContext } from '../../hooks';

export type CollapsibleTriggerProps<T extends ElementType> = PolymorphicComponentPropWithRef<T, {
  className?: string
  onClick?: () => void
}>;

type CollapsibleTriggerComponent = <T extends ElementType = 'button'>(props: CollapsibleTriggerProps<T>) => ReactNode | null;

export const CollapsibleTrigger: CollapsibleTriggerComponent = <T extends ElementType>({
  className,
  onClick: _onClick,
  children,
  as,
  ref,
  ...props
}: CollapsibleTriggerProps<T>) => {
  const Element = as || 'button';

  const { opened, open, close } = useCollapsibleContext()

  const onClick = () => {
    if (opened) close()
    else open()

    _onClick?.()
  }

  return (
    <Element type={Element === 'button' ? 'button' : undefined} aria-expanded={opened} data-open={opened} onClick={onClick} ref={ref}
             className={csx(style.triggerButton, className)} {...props}>
      {children}
    </Element>
  )
}