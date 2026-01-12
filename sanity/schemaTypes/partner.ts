import { defineField, defineType } from 'sanity'

export const partnerType = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
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
      name: 'logo',
      title: 'Partner Logo',
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'partnershipType',
      title: 'Partnership Type',
      type: 'string',
      options: {
        list: [
          { title: 'Strategic Partner', value: 'strategic' },
          { title: 'Technology Partner', value: 'technology' },
          { title: 'Academic Partner', value: 'academic' },
          { title: 'Industry Partner', value: 'industry' },
          { title: 'Sponsor', value: 'sponsor' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Partner',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort partners on the website',
      validation: (rule) => rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'partnershipType',
      media: 'logo',
    },
  },
})