// sanity/schema/siteSettings.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phoneRaw',
      title: 'Phone (raw)',
      type: 'string',
      description: 'Digits only, e.g. +18133441121 — used in your href="tel:…" link',
      validation: (Rule) =>
        Rule.required()
           .regex(/^\+?\d+$/, { name: 'phone', invert: false })
           .error('Must be a valid phone number with only digits and an optional leading +'),
    }),
    defineField({
      name: 'phoneDisplay',
      title: 'Phone (display)',
      type: 'string',
      initialValue: '(813) 344-1121',
      validation: (Rule) => Rule.required().error('This text shows up on the page'),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email().error('Must be a valid email'),
    }),
    defineField({
      name: 'addressText',
      title: 'Address Text',
      type: 'string',
      description: 'E.g. “123 Main St, Tampa FL” — what users actually see',
    }),
    defineField({
      name: 'mapUrl',
      title: 'Google Maps URL',
      type: 'url',
      description: 'Full link to your Google Maps location',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Details',      // <-- what appears in the sidebar
        subtitle: '📞 ✉️ 📍 editable in Studio'
      }
    }
  }
})
