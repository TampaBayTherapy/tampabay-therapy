

import { SanityLive } from "@/sanity/lib/live";
import "./globals.css"
import { Figtree } from "next/font/google";
import { preconnect, prefetchDNS } from 'react-dom'



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



    return (
      <html lang="en">
        
        <body
          className={`${figtree.className}  antialiased`}
        >
         
             {children}
             <SanityLive />
              
        </body>
      </html>
    );
  }