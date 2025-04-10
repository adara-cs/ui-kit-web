'use client';
import { FC, PropsWithChildren, useMemo, MouseEvent, KeyboardEvent } from 'react';
import { PhoneSelectContext } from './context.ts';
import { CountryCode } from 'libphonenumber-js';

export interface PhoneSelectProviderProps {
  value: CountryCode
  onSelect: (e: KeyboardEvent | MouseEvent | null, value: CountryCode) => void
  size: 'small' | 'medium' | 'large'
}

export const PhoneSelectProvider: FC<PropsWithChildren<PhoneSelectProviderProps>> = ({ value, onSelect, size, children }) => {
  const providerValue = useMemo(() => ({
    value,
    onSelect,
    size
  }), [value, onSelect, size])

  return (
    <PhoneSelectContext.Provider value={providerValue}>
      {children}
    </PhoneSelectContext.Provider>
  )
}