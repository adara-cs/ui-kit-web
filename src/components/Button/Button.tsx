import style from './style.module.css';
import { ButtonBase, ButtonBaseProps } from '../ButtonBase';

export interface ButtonProps extends ButtonBaseProps {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium' | 'large';
  children: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  size = 'medium',
  disabled,
  children,
  variant = 'primary',
  appearance = 'fill',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <ButtonBase
      type={type}
      disabled={disabled}
      className={style.button}
      data-size={size}
      variant={variant}
      appearance={appearance}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};
