// sanity.config.ts
'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  // Add this event handler for studio start
  studio: {
    components: {
      layout: (props) => {
        // When the Sanity Studio loads, set the editing cookie
        if (typeof window !== 'undefined') {
          fetch('/api/sanity-editing?editing=true')
            .catch(err => console.error('Failed to set editing mode:', err));
          
          // Clean up when the studio component unmounts
          window.addEventListener('beforeunload', () => {
            fetch('/api/sanity-editing?editing=false')
              .catch(err => console.error('Failed to clear editing mode:', err));
          });
        }
        
        // Return the original layout
        return props.renderDefault(props);
      }
    }
  }
})