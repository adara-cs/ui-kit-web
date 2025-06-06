import { FC } from 'react';
import style from './style.module.css';
import { Icon } from '../../../Icon';
import { csx } from '@adara-cs/utils';
import { sizeMapper } from './utils';
import { ChevronIcon } from '@adara-cs/icons';

export interface SelectArrowProps {
  open?: boolean
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export const SelectArrow: FC<SelectArrowProps> = ({ open, size = 'medium', className }) => {
  return (
    <Icon className={csx(style.selectArrow, className)} data-open={open} size={sizeMapper(size)}>
      <ChevronIcon />
    </Icon>
  )
}