// sanity/lib/fetchGallery.ts

import { client } from "./client";

export async function fetchGalleryImages() {
  // This query fetches the gallery document with title "Main Gallery"
  // and returns its images array (each with alt text and the image asset URL)
  const query = ` *[_type == "gallery"][0] {
      title,
      images[] {
        _key,
        uniqueId,
        asset-> {
          _id,
          url
        },
        alt
      }
    }`;
  const data = await client.fetch(query);
  return data?.images ?? []; // Return the images array or an empty array if not found
}
