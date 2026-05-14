import React from 'react'

type FeatureItem = {
  title: string
  description?: string | null
}

type AboutFeaturesProps = {
  items: FeatureItem[]
  className?: string
}

export function AboutFeatures({ items, className = '' }: AboutFeaturesProps) {
  if (!items || items.length === 0) return null
  return (
    <ul className={`m-0 p-0 list-none flex flex-col gap-4 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-blue/10 text-blue flex items-center justify-center text-xs font-bold">
            {i + 1}
          </span>
          <div>
            <p className="m-0 font-display font-bold text-sm text-ink">{item.title}</p>
            {item.description && (
              <p className="m-0 mt-0.5 font-body text-sm text-mute">{item.description}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
