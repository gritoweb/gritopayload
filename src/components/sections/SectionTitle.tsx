import React from 'react'

export function SectionTitle({
  eyebrow,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
  children,
}: {
  eyebrow?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  children: React.ReactNode
}) {
  const alignClasses: Record<string, string> = {
    left: '',
    center: 'text-center items-center mx-auto',
  }
  const root = ['flex flex-col gap-3 max-w-3xl', alignClasses[align], className]
    .filter(Boolean)
    .join(' ')
  const titleClasses = ['m-0 text-blue', titleClassName].filter(Boolean).join(' ')
  return (
    <header className={root}>
      {eyebrow && <p className="font-eyebrow m-0">{eyebrow}</p>}
      <h2 className={titleClasses}>{children}</h2>
      {description && (
        <p className="body-text text-mute m-0 mt-2 max-w-prose">{description}</p>
      )}
    </header>
  )
}
