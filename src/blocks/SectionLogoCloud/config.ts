import type { Block } from 'payload'

import { titleMaxWidth } from '../../fields/titleMaxWidth'

export const SectionLogoCloud: Block = {
  slug: 'homeSectionLogoCloud',
  interfaceName: 'SectionLogoCloudBlock',
  labels: { singular: 'Partner Companies', plural: 'Partner Companies' },
  imageURL: '/block-previews/logo-cloud.png',
  imageAltText: 'Partner Companies',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Clientes',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      localized: true,
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
      name: 'partners',
      label: 'Partners / Clients',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'logo',
          label: 'Logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
