import { defineQuery } from "next-sanity";

export const LATEST_IMAGES = defineQuery(`*[_type == "gallery"][0] {
  title,
  images[0...10] | order(_key desc) {
    _key,
    uniqueId,
    asset-> {
      _id,
      url,
           metadata {
          dimensions {
            width,
            height,
            aspectRatio
          },
          lqip
          }
    },
    alt
  }
}`);
export const ALL_IMAGES = defineQuery(`*[_type == "gallery"][0] {
      title,
      images[] {
        _key,
        uniqueId,
        asset-> {
          _id,
          url,
           metadata {
          dimensions {
            width,
            height,
            aspectRatio
          },
          lqip  // Low Quality Image Placeholder (base64 encoded)
        }
        },
        alt
      }
    }`);

export const ALL_FAQ = defineQuery(`
  *[_type == "faqItem"]{
    _id,
    question,
    answer,
    color
  }`);


  export const EXPERTISE_SECTION = defineQuery(`
    *[_type == "expertiseSection"][0]{
      items[]{
        _key,
        title,
        text,
        color,
        image{ 
          asset->{ _id, url, metadata{ dimensions { width, height, aspectRatio } } }, 
          alt 
        }
      }
    }
  `)

  export const ALL_EXPERTISE = defineQuery(`
    *[_type == "expertiseItem"] 
      | order(_createdAt asc) {
        _id,
        title,
        text,
        color,
        image{ asset->{url, metadata{dimensions{width,height,aspectRatio}}}, alt }
      }
  `)