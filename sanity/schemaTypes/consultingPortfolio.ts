import { defineField, defineType } from 'sanity'

export const consultingPortfolioType = defineType({
  name: 'consultingPortfolio',
  title: 'Consulting Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: 'Project Summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Technology', value: 'technology' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Finance', value: 'finance' },
          { title: 'Education', value: 'education' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Retail', value: 'retail' },
          { title: 'Energy', value: 'energy' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Project Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Project End Date',
      type: 'date',
      description: 'Leave empty for ongoing projects',
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
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
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'results',
      title: 'Key Results',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of measurable outcomes or achievements',
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort projects on the website',
      validation: (rule) => rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'images.0',
    },
  },
})