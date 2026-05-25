import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const Portfolios: CollectionConfig<'portfolios'> = {
  slug: 'portfolios',
  labels: { singular: 'Portfolio', plural: 'Portfolios' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    client: true,
    image: true,
    tag: true,
    tagVariant: true,
    accent: true,
    year: true,
    result: true,
    summary: true,
  },
  admin: {
    group: 'Portfolio',
    defaultColumns: ['title', 'client', 'year', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Project title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'client',
      label: 'Company / client name',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      label: 'Summary (hero subtitle)',
      type: 'textarea',
      localized: true,
      admin: { description: 'Appears below the title on the case page.' },
    },
    {
      name: 'image',
      label: 'Cover image (hero)',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tag',
      label: 'Card tag',
      type: 'relationship',
      relationTo: 'portfolio-tags',
      admin: { position: 'sidebar' },
    },
    {
      name: 'tagVariant',
      label: 'Tag color',
      type: 'select',
      options: [
        { label: 'Blue', value: 'blue' },
        { label: 'Orange', value: 'orange' },
      ],
      defaultValue: 'blue',
      admin: { position: 'sidebar' },
    },
    {
      name: 'accent',
      label: 'Card color',
      type: 'select',
      options: [
        { label: 'Blue', value: 'blue' },
        { label: 'Orange', value: 'orange' },
      ],
      defaultValue: 'blue',
      admin: { position: 'sidebar' },
    },
    {
      name: 'year',
      label: 'Year',
      type: 'text',
      admin: { position: 'sidebar' },
    },
    {
      name: 'result',
      label: 'Featured result (card)',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Shown on the listing card. Ex: +38% average ticket',
      },
    },
    {
      name: 'siteUrl',
      label: 'Live site link',
      type: 'text',
      admin: { position: 'sidebar' },
    },
    {
      name: 'nextProjectHref',
      label: 'Next project link',
      type: 'text',
      admin: { position: 'sidebar', description: '"Next project" button in the hero.' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },

    {
      type: 'collapsible',
      label: 'Meta strip (client / sector / deliverables / duration)',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'sector',
          label: 'Sector',
          type: 'text',
        },
        {
          name: 'deliverables',
          label: 'Deliverables',
          type: 'text',
          admin: { description: 'Ex: Site, POS, Reservations' },
        },
        {
          name: 'duration',
          label: 'Duration',
          type: 'text',
          admin: { description: 'Ex: 10 weeks' },
        },
      ],
    },

    {
      type: 'collapsible',
      label: 'The challenge',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'challengeTitle',
          label: 'Challenge title',
          type: 'text',
          admin: { description: 'Use *word* for orange.' },
        },
        {
          name: 'challengeBody',
          label: 'Challenge body',
          type: 'textarea',
          admin: { description: 'Paragraphs separated by a blank line.' },
        },
      ],
    },

    {
      name: 'processSteps',
      label: 'Process',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'number',
          label: 'Number',
          type: 'text',
          admin: { description: 'Ex: 01' },
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
      ],
    },

    {
      name: 'gallery',
      label: 'Gallery',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'label',
          label: 'Caption',
          type: 'text',
        },
        {
          name: 'accent',
          label: 'Background color (fallback)',
          type: 'select',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Orange', value: 'orange' },
          ],
          defaultValue: 'blue',
        },
      ],
    },

    {
      type: 'collapsible',
      label: 'Client quote',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'quoteText',
          label: 'Quote',
          type: 'textarea',
        },
        {
          name: 'quoteAuthor',
          label: 'Author',
          type: 'text',
        },
        {
          name: 'quoteRole',
          label: 'Role / company',
          type: 'text',
        },
      ],
    },

    {
      name: 'stats',
      label: 'Results (numbers)',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'text',
          admin: { description: 'Ex: +38%' },
        },
        {
          name: 'label',
          label: 'Description',
          type: 'text',
          admin: { description: 'Ex: Average ticket after redesign' },
        },
      ],
    },

    {
      name: 'team',
      label: 'Team',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'role',
          label: 'Role',
          type: 'text',
        },
      ],
    },
    {
      name: 'stack',
      label: 'Stack / tooling',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'tool',
          label: 'Tool',
          type: 'text',
        },
      ],
    },

    {
      name: 'relatedPortfolios',
      label: 'Related projects',
      type: 'relationship',
      relationTo: 'portfolios',
      hasMany: true,
      maxRows: 3,
      filterOptions: ({ id }) => ({ id: { not_in: [id] } }),
      admin: { position: 'sidebar' },
    },

    slugField(),
  ],
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
