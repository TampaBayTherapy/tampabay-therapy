// Modify your layout.tsx

import { SanityLive } from "@/sanity/lib/live";
import "./globals.css"
import { Figtree } from "next/font/google";
import { preconnect, prefetchDNS } from 'react-dom'
import { draftMode } from "next/headers";
import { cookies } from 'next/headers';

const figtree = Figtree({
  subsets:["latin"]
})

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    preconnect("https://cdn.sanity.io");
    prefetchDNS("https://cdn.sanity.io");
    const { isEnabled } = await draftMode();
    
    // Check for a specific cookie or query param that would only be present when editing
    const cookieStore = cookies();
    const isEditing = (await cookieStore).has('sanity-editing') || false;
    
    // Only render SanityLive when both draft mode is enabled AND we're in editing mode
    const shouldShowLive = isEnabled && isEditing;

    return (
      <html lang="en">
        <body className={`${figtree.className} antialiased`}>
          {children}
          {shouldShowLive && <SanityLive />}
        </body>
      </html>
    );
  }