import { FC, ReactElement, ReactNode, Ref, useState } from 'react';
import { csx } from '../../utils/css';
import styles from './style.module.css'
import {
  autoUpdate,
  flip, FloatingFocusManager, FloatingOverlay,
  offset, Placement,
  shift, useClick, useDismiss,
  useFloating,
  useInteractions, useRole, useTransitionStyles
} from '@floating-ui/react';

export interface PopoverProps {
  className?: string
  triggerSlot?: (ref: Ref<never>, props?: Record<string, unknown>) => ReactElement
  children?: ReactNode
  placement?: Placement
  lockScroll?: boolean
  overlay?: boolean
  blurredOverlay?: boolean
  role?: 'combobox' | 'listbox' | 'dialog' | 'select'
}

export const Popover: FC<PopoverProps> = ({
  triggerSlot,
  placement = 'bottom',
  role: ariaRole,
  lockScroll = false,
  overlay = false,
  blurredOverlay = true,
  className,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift()],
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: ariaRole });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const { styles: transitionStyles } = useTransitionStyles(context, {
    duration: 200,
  });

  const content = (
    <FloatingFocusManager context={context}>
      <div
        ref={refs.setFloating}
        style={{ ...floatingStyles, ...transitionStyles }}
        className={csx(styles.popover, className)}
        {...getFloatingProps()}
      >
        {children}
      </div>
    </FloatingFocusManager>
  )

  return (
    <>
      {triggerSlot?.(refs.setReference, getReferenceProps())}
      {isOpen && (
        overlay ? (
          <FloatingOverlay lockScroll={lockScroll} className={csx(styles.popoverOverlay, blurredOverlay ? styles.popoverOverlayBlurred : undefined)}>
            {content}
          </FloatingOverlay>
        ) : content
      )}
    </>
  )
}