// /sanity/schema/galleryType.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { 
            hotspot: true,
            // This ensures unique IDs even for identical files
            storeOriginalFilename: false
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            // Add a unique identifier field
            defineField({
              name: 'uniqueId',
              title: 'Unique ID',
              type: 'string',
              readOnly: true,
              initialValue: () => Math.random().toString(36).substring(2, 15),
            })
          ],
        }),
      ],
    }),
  ],
})