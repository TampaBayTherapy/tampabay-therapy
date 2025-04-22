

import { SanityLive } from "@/sanity/lib/live";
import "./globals.css"
import { Figtree } from "next/font/google";
import { preconnect, prefetchDNS } from 'react-dom'
import { draftMode } from "next/headers";


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
  const { isEnabled } = await draftMode()
    return (
      <html lang="en">
        <body
          className={`${figtree.className}  antialiased`}
        >
         
             {children}
             {isEnabled && <SanityLive />}
        </body>
      </html>
    );
  }