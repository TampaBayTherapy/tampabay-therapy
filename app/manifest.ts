import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tampa Bay Play Therapy | Child & Family Play Therapy | LMHC & RPT Specialist',
    short_name: 'Tampa Bay Play Therapy',
    description: 'Licensed Mental Health Counselor (LMHC) and Registered Play Therapist (RPT) providing child-centered play therapy and family interventions. Helping children express emotions and build resilience through play since 2012.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#7caeff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}