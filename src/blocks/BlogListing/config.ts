import type { Block } from 'payload'

import { titleMaxWidth } from '../../fields/titleMaxWidth'

export const BlogListing: Block = {
  slug: 'blogListing',
  interfaceName: 'BlogListingBlock',
  labels: { singular: 'Blog Listing', plural: 'Blog Listings' },
  fields: [
    {
      name: 'featuredPost',
      label: 'Featured post',
      type: 'relationship',
      relationTo: 'posts',
      admin: {
        description: 'Appears as a banner above the listing. Leave empty to hide.',
      },
    },
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      localized: true,
      defaultValue: 'Arquivo',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      localized: true,
      defaultValue: '*Últimos posts*',
      admin: { description: 'Use *word* for orange. Use \\n for line break.' },
    },
    titleMaxWidth,
    {
      name: 'postsPerPage',
      label: 'Posts per page',
      type: 'number',
      defaultValue: 9,
      min: 3,
      max: 30,
    },
    {
      name: 'showSearch',
      label: 'Show search',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showFilters',
      label: 'Show filters by category',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
