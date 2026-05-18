import React from 'react'

export type Stat = {
  value: string
  label: string
}

export function ResultsGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white border border-line rounded-3xl p-7">
          <dd className="m-0 font-display font-black text-5xl leading-none tracking-tight text-orange">
            {stat.value}
          </dd>
          <dt className="mt-2.5 font-body text-ink-soft">{stat.label}</dt>
        </div>
      ))}
    </dl>
  )
}
