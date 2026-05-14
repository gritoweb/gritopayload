import type { Block } from 'payload'

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
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
      defaultValue: 'Por que *a diferença* nessa parceria',
      admin: { description: 'Use *palavra* para laranja. Use \\n para quebra de linha.' },
    },
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
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
      ],
    },
  ],
}
