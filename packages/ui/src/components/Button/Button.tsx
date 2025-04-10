import { ButtonBase, ButtonBaseProps } from '../ButtonBase';
import { ElementType, ReactNode, Ref } from 'react';
import { csx } from '@adara-cs/utils';
import { PolymorphicComponentPropWithRef } from '@adara-cs/types';
import { Spinner } from '../Spinner';
import style from './style.module.css';
import { sizeMapper } from './utils';

export type ButtonProps<T extends ElementType> = PolymorphicComponentPropWithRef<T, ButtonBaseProps<T> & {
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium' | 'large'
  spinnerSlot?: ReactNode
  spinnerClassName?: string
  fullWidth?: boolean
  onClick?: () => void
}>

type ButtonComponent = <T extends ElementType = 'button'>(props: ButtonProps<T>) => ReactNode | null;

/** Primary UI component for user interaction */
export const Button: ButtonComponent = <T extends ElementType>({
   size = 'medium',
   disabled,
   children,
   variant = 'primary',
   appearance = 'fill',
   type = 'button',
   loading = false,
   spinnerSlot,
   spinnerClassName,
   className,
   fullWidth,
   ref,
   ...props
}: ButtonProps<T>) => {
  return (
    <ButtonBase
      type={type}
      {...(props as Record<string, unknown>)}
      data-full-width={fullWidth}
      className={csx(style.button, className)}
      data-size={size}
      disabled={disabled || loading}
      appearance={appearance}
      variant={variant}
      ref={ref as Ref<never>}
    >
      {loading && (spinnerSlot ? spinnerSlot : <Spinner className={csx(style.spinner, spinnerClassName)} aria-hidden variant='secondary' size={sizeMapper(size)} />)}
      {children}
    </ButtonBase>
  );
}
