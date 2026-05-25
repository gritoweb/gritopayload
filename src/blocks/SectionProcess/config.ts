import type { Block } from 'payload'

import { titleMaxWidth } from '../../fields/titleMaxWidth'

export const SectionProcess: Block = {
  slug: 'homeSectionProcess',
  interfaceName: 'SectionProcessBlock',
  labels: { singular: 'Process Section', plural: 'Process Section' },
  imageURL: '/block-previews/processo.png',
  imageAltText: 'Process Section',
  fields: [
    {
      name: 'background',
      label: 'Background',
      type: 'select',
      defaultValue: 'dark',
      options: [
        { label: 'Dark (default)', value: 'dark' },
        { label: 'White', value: 'white' },
      ],
    },
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Como trabalhamos',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Um *processo claro*, do briefing ao go-live',
      admin: { description: 'Use *word* for orange. Use \\n for line break.' },
    },
    titleMaxWidth,
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'highlightIndex',
      label: 'Highlighted step index (0-based)',
      type: 'number',
      defaultValue: 2,
      admin: {
        description: 'The step number that will be highlighted in orange (0 = first).',
      },
    },
    {
      name: 'steps',
      label: 'Process steps',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          localized: true,
        },
      ],
    },
  ],
}
