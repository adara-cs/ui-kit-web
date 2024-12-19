import SupportIcon from '../../../../assets/icons/support.svg?react'
import GlobeIcon from '../../../../assets/icons/globe.svg?react'
import ChevronIcon from '../../../../assets/icons/chevron.svg?react'
import MenuLeftIcon from '../../../../assets/icons/menu-left.svg?react'

const icons = {
  support: SupportIcon,
  globe: GlobeIcon,
  chevron: ChevronIcon,
  menuLeft: MenuLeftIcon
} as const

export type IconName = keyof typeof icons

export const getIcon = (name: IconName) => {
  return icons[name]
}