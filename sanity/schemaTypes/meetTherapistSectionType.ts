// ./sanity/schemas/meetTherapistSection.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'meetTherapistSectionType',
  title: 'Meet Therapist Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. “Meet Your”',
    }),
    defineField({
      name: 'accentText',
      title: 'Accent Text',
      type: 'string',
      description: 'e.g. “Therapist”',
    }),
    defineField({
      name: 'image',
      title: 'Therapist Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'therapistCard',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: true },
              fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
            }),
            defineField({ name: 'heading', title: 'Heading', type: 'string' }),
            defineField({ name: 'content', title: 'Content', type: 'text' }),
            
          ],
        },
      ],
    }),
   
  ],
})
