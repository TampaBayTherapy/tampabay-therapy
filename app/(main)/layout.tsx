import type { Metadata } from "next";


import { domAnimation, LazyMotion } from "framer-motion";
import InnerLayout from "@/components/InnerLayout";




// const outfit = Outfit({

//   subsets:["latin"]
// })





export const metadata: Metadata = {
  title: "Child & Family Play Therapy | LMHC & RPT Specialist",
  description: "Licensed Mental Health Counselor (LMHC) and Registered Play Therapist (RPT) providing child-centered play therapy and family interventions. Helping children express emotions and build resilience through play since 2012.",
  keywords: ["play therapy", "child therapist", "LMHC", "RPT", "child mental health", "family therapy"],
  openGraph: {
    title: "Child & Family Play Therapy Specialist | Mary Lehoux",
    description: "Holistic, child-centered therapy approaches to help children and families thrive. LMHC & RPT serving families since 2012.",
    url: "https://www.tampabayplaytherapy.com",
    type: "website",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Play Therapy Session"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Child & Family Play Therapy Specialist",
    description: "Helping children express emotions and build resilience through play therapy interventions.",
    images: ["/twitter-image.jpg"]
  }
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
         <LazyMotion features={domAnimation}>
            <InnerLayout>{children}</InnerLayout>
          </LazyMotion>
     
  );
}
