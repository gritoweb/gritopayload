import type { Block } from 'payload'

import { titleMaxWidth } from '../../fields/titleMaxWidth'

export const LatestPortfolios: Block = {
  slug: 'latestPortfolios',
  interfaceName: 'LatestPortfoliosBlock',
  labels: { singular: 'Latest Portfolios', plural: 'Latest Portfolios' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Portfólio',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      defaultValue: '*Últimos projetos* que entregamos',
      admin: { description: 'Use *word* for orange. Use \\n for line break.' },
    },
    titleMaxWidth,
    {
      name: 'buttonLabel',
      label: 'Button — text',
      type: 'text',
      defaultValue: 'Ver portfólio completo',
    },
    {
      name: 'buttonHref',
      label: 'Button — link',
      type: 'text',
      defaultValue: '/portfolio',
    },
  ],
}
