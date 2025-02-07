import { FC } from 'react';
import { FlagIcon, FlagIconProps } from '../../../FlagIcon';
import { PhoneSelectOption } from '../PhoneSelectOption';
import { Select, SelectProps } from '../../../Select';
import { CountryCode } from 'libphonenumber-js';
import style from './style.module.css';

export interface PhoneSelectProps {
  countries: Array<{
    iso: CountryCode
    label: string
  }>
  size?: SelectProps['size']
  fullWidthListbox?: boolean
  value?: CountryCode
  onSelect?: (country: CountryCode) => void
}

export const PhoneSelect: FC<PhoneSelectProps> = ({ countries, size = 'medium', fullWidthListbox, value, onSelect }) => {
  return (
    <Select readOnly={countries.length === 1} wrapperClassName={style.selectWrapper} fullWidthListbox={fullWidthListbox} valueSlot={<FlagIcon size={size} name={value as FlagIconProps['name']} />} value={value} onSelect={onSelect} className={style.countrySelect} listboxClassName={style.countryList}>
      {countries?.map(({ label, iso }) => (
        <PhoneSelectOption key={iso} size={size} value={iso} iso={iso as FlagIconProps['name']}>
          {label}
        </PhoneSelectOption>
      ))}
    </Select>
  )
}