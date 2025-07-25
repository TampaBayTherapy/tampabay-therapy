import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import galleryType from './galleryType'
import faqType from './faqType'
import expertiseType from './expertiseType'
import meetTherapistSectionType from './meetTherapistSectionType'
import siteSettings from './siteSettings'
// import aboutPageType from './aboutPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType,galleryType,faqType,expertiseType,meetTherapistSectionType,siteSettings],
}
