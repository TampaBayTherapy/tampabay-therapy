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
