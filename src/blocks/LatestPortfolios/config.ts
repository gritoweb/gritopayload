import type { Block } from 'payload'

export const LatestPortfolios: Block = {
  slug: 'latestPortfolios',
  interfaceName: 'LatestPortfoliosBlock',
  labels: { singular: 'Últimos Portfólios', plural: 'Últimos Portfólios' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Portfólio',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      defaultValue: '*Últimos projetos* que entregamos',
      admin: { description: 'Use *palavra* para laranja. Use \\n para quebra de linha.' },
    },
    {
      name: 'buttonLabel',
      label: 'Botão — texto',
      type: 'text',
      defaultValue: 'Ver portfólio completo',
    },
    {
      name: 'buttonHref',
      label: 'Botão — link',
      type: 'text',
      defaultValue: '/portfolio',
    },
  ],
}
