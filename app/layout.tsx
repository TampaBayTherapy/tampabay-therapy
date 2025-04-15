import "./globals.css"
import { Figtree } from "next/font/google";


const figtree = Figtree({
  subsets:["latin"]
})

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`${figtree.className}  antialiased`}
        >
         
             {children}
        </body>
      </html>
    );
  }