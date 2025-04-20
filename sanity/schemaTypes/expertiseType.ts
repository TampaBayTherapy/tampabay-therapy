import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'expertiseItem',
  title: 'Expertise Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Must have a title'),
    }),
    defineField({
      name: 'text',
      title: 'Description',
      type: 'string',
      validation: (Rule) =>
        Rule.max(120).warning('Keep under 120 characters for the card layout'),
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      options: {
        list: [
          { title: 'Green',  value: '#C1EDA5' },
          { title: 'Yellow', value: '#FFF0B0' },
          { title: 'Orange', value: '#FFBE81' },
          { title: 'Pink', value: '#FFD5E5' },
          { title: 'Purple',   value: '#D9C2FF' },
        ],
      },
      validation: (Rule) => Rule.required().error('Pick a color'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) =>
            Rule.required().error('Provide alt text for accessibility'),
        }),
      ],
    }),
    // Optional: if you ever want custom ordering:
    // defineField({
    //   name: 'order',
    //   title: 'Sort Order',
    //   type: 'number',
    //   description: 'Lower numbers come first',
    // }),
  ],
})
