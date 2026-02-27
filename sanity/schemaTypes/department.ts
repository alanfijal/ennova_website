import { defineField, defineType } from 'sanity'

export const departmentType = defineType({
  name: 'department',
  title: 'Department',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Department Name',
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
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Phosphor icon name (e.g. BriefcaseIcon, FootballIcon, RocketLaunchIcon)',
      options: {
        list: [
          { title: 'Briefcase', value: 'BriefcaseIcon' },
          { title: 'Football', value: 'FootballIcon' },
          { title: 'Rocket Launch', value: 'RocketLaunchIcon' },
          { title: 'Lightbulb', value: 'LightbulbIcon' },
          { title: 'Lightbulb Filament', value: 'LightbulbFilamentIcon' },
          { title: 'Users', value: 'UsersIcon' },
          { title: 'Lightning', value: 'LightningIcon' },
          { title: 'Database', value: 'DatabaseIcon' },
          { title: 'Coins', value: 'CoinsIcon' },
          { title: 'Code', value: 'CodeIcon' },
          { title: 'Chart Bar', value: 'ChartBarIcon' },
          { title: 'Globe', value: 'GlobeIcon' },
        ],
      },
    }),
    defineField({
      name: 'members',
      title: 'Number of Members',
      type: 'number',
    }),
    defineField({
      name: 'projects',
      title: 'Number of Projects',
      type: 'number',
    }),
    defineField({
      name: 'color',
      title: 'Gradient Color',
      type: 'string',
      description: 'Tailwind gradient classes, e.g. "from-secondary to-gradient"',
    }),
    defineField({
      name: 'focus',
      title: 'Focus Area',
      type: 'string',
      options: {
        list: [
          { title: 'Services', value: 'Services' },
          { title: 'Events', value: 'Events' },
          { title: 'Core', value: 'Core' },
        ],
      },
    }),

    // ─── Department Detail Fields ─────────────────────────────
    defineField({
      name: 'logo',
      title: 'Department Logo (SVG)',
      type: 'file',
      description: 'SVG logo file for the department hero section',
      options: {
        accept: '.svg',
      },
    }),
    defineField({
      name: 'whatWeDo',
      title: 'What We Do',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tools',
      title: 'Tools We Use',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'teamPhoto',
      title: 'Team Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'position', title: 'Position', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
            defineField({ name: 'email', title: 'Email', type: 'string' }),
            defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 3 }),
            defineField({
              name: 'skills',
              title: 'Skills',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort departments on the website',
      validation: (rule) => rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'focus',
      media: 'teamPhoto',
    },
  },
})
