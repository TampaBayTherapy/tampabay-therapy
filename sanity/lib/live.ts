import "server-only"

import { defineLive } from "next-sanity";
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    // Live content is currently only available on the experimental API
    apiVersion: 'vX',
    // Reduce unnecessary polling when not in editing mode
    perspective: 'published',
    // Setting stega to false can improve performance when not actively editing
    stega: false
  }),
  // Use these options to optimize when the component is rendered
  
});