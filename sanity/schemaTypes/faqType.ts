import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text', // or 'blockContent' if you want rich text
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      options: {
        list: [
          { title: 'Pink',   value: '#FFD5E5' },
          { title: 'Orange',  value: '#FFBE81' },
          { title: 'Green',  value: '#C1EDA5' },
          { title: 'Yellow',    value: '#FFF0B0' },
          { title: 'Purple',    value: '#D9C2FF' },
        ],
      },
    }),
   
  ],
})
