'use client';

import { ButtonHTMLAttributes, FC, Ref } from 'react';
import { AvatarGroupCount } from '../AvatarGroupCount';
import { Icon } from '../../../Icon';
import { csx } from '@adara-cs/utils';
import style from './style.module.css'
import { AvatarGroupItemProps } from '../AvatarGroupItem';
import { sizeMapper } from './utils';
import { ChevronIcon } from '@adara-cs/icons';

export interface AvatarGroupLimitedPopoverTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>
  open?: boolean
  children?: string | number
  size?: AvatarGroupItemProps['size']
}

export const AvatarGroupLimitedPopoverTrigger: FC<AvatarGroupLimitedPopoverTriggerProps> = ({
  ref,
  className,
  open,
  children,
  size = 'md',
  ...props
}) => {
  return (
    <button className={csx(style.trigger, className)} type='button' ref={ref} {...props}>
      <AvatarGroupCount>{children}</AvatarGroupCount>
      <Icon className={style.stateIcon} data-open={open} size={sizeMapper(size)}><ChevronIcon /></Icon>
    </button>
  )
}