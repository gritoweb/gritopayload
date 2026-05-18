import type { Block } from 'payload'

export const LatestPosts: Block = {
  slug: 'latestPosts',
  interfaceName: 'LatestPostsBlock',
  labels: { singular: 'Últimos Posts', plural: 'Últimos Posts' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Blog',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      defaultValue: '*Últimos posts* do blog',
      admin: { description: 'Use *palavra* para laranja. Use \\n para quebra de linha.' },
    },
    {
      name: 'buttonLabel',
      label: 'Botão — texto',
      type: 'text',
      defaultValue: 'Ver todos os posts',
    },
    {
      name: 'buttonHref',
      label: 'Botão — link',
      type: 'text',
      defaultValue: '/posts',
    },
  ],
}
