"use client";

import { ReactNode } from "react";
import Header from "./Header";
 import Footer from "./Footer";




type InnerLayoutProps = {
  children: ReactNode;
};

// Define animation variants for the items

export default function InnerLayout({ children }: InnerLayoutProps) {
  return (
    <>
   
      <div className="relative flex flex-auto overflow-hidden bg-white ">
        <div className="relative isolate flex w-full flex-col ">
          <Header/>
          <main className="w-full flex-auto">{children}</main>
         <Footer/> 
        </div>
      </div>
      
      <div id="modal-root"></div>
    </>
  );
}

