import type { Block } from 'payload'

import { titleMaxWidth } from '../../fields/titleMaxWidth'

export const ChecklistGrid: Block = {
  slug: 'checklistGrid',
  interfaceName: 'ChecklistGridBlock',
  labels: { singular: 'Checklist Grid', plural: 'Checklist Grids' },
  imageURL: '/images/blocks/checklist.png',
  imageAltText: 'Checklist Grid',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      localized: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Por que *a diferença* nessa parceria',
      admin: { description: 'Use *word* for orange. Use \\n for line break.' },
    },
    titleMaxWidth,
    {
      name: 'items',
      label: 'Checklist items',
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
