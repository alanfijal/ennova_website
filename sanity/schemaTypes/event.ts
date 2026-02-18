import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'eventId',
      title: 'Event ID',
      type: 'string',
      description: 'e.g. ENNOVA-001',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'domain',
      title: 'Domain',
      type: 'string',
      options: {
        list: [
          { title: 'Competition', value: 'COMPETITION' },
          { title: 'Conference', value: 'CONFERENCE' },
          { title: 'Sports', value: 'SPORTS' },
          { title: 'Impact', value: 'IMPACT' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'keyHighlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'specs',
      title: 'Specs',
      type: 'object',
      fields: [
        defineField({ name: 'reach', title: 'Reach', type: 'string' }),
        defineField({ name: 'conversion', title: 'Conversion', type: 'string' }),
        defineField({ name: 'status', title: 'Status', type: 'string' }),
      ],
    }),

    // ─── Event Detail Fields ──────────────────────────────────
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'string',
      description: 'Display date, e.g. "March 15-16, 2026"',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'object',
      fields: [
        defineField({ name: 'partnerships', title: 'Partnerships', type: 'number' }),
        defineField({ name: 'participants', title: 'Participants', type: 'number' }),
        defineField({ name: 'outcomes', title: 'Outcomes', type: 'string' }),
        defineField({ name: 'funding', title: 'Funding', type: 'string' }),
      ],
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text' }),
        defineField({ name: 'author', title: 'Author', type: 'string' }),
        defineField({ name: 'role', title: 'Role', type: 'string' }),
      ],
    }),
    defineField({
      name: 'media',
      title: 'Media Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alternative text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      domain: 'domain',
      media: 'image',
    },
    prepare(selection) {
      const { title, domain } = selection
      return {
        ...selection,
        subtitle: domain || 'No domain',
      }
    },
  },
})
