export type TitleMaxWidth = 'none' | 'sm' | 'md' | 'lg' | 'xl'

const map: Record<TitleMaxWidth, string> = {
  none: '',
  sm: 'lg:max-w-[480px]',
  md: 'lg:max-w-[640px]',
  lg: 'lg:max-w-[800px]',
  xl: 'lg:max-w-[960px]',
}

export const titleMaxWidthClass = (v?: TitleMaxWidth | null): string => map[v ?? 'none']
