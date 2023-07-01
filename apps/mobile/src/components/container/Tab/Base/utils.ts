import colors from 'tailwindcss/colors'

export function getSelectedTabProps(tab: string, currentTab: string) {
  if (tab === currentTab)
    return {
      className: 'border-t-2 border-t-neutral-800',
      color: colors.neutral[800]
    }

  return {
    className: '',
    color: colors.neutral[400]
  }
}
