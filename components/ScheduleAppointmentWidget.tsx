/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AppointmentRequestWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const pathname = usePathname();
  const isFirstMount = useRef(true);

  useEffect(() => {
    const loadWidget = () => {
      // Clean up any existing SimplePractice global state
      if (typeof window !== 'undefined') {
        // Clear any existing widget state
        delete (window as any).SPWidget;
        delete (window as any).SimplePractice;
        
        // Remove any existing SimplePractice scripts
        const existingScripts = document.querySelectorAll('script[src*="simplepractice"]');
        existingScripts.forEach(script => script.remove());
      }

      // Remove our script if it exists
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }

      // Small delay to ensure cleanup is complete
      setTimeout(() => {
        // Create fresh script
        const script = document.createElement('script');
        script.src = 'https://widget-cdn.simplepractice.com/assets/integration-1.0.js';
        script.async = true;
        
        script.onload = () => {
          // Force widget initialization after script loads
          setTimeout(() => {
            if (typeof window !== 'undefined' && (window as any).SPWidget) {
              try {
                (window as any).SPWidget.init();
                (window as any).SPWidget.rebind();
              } catch (error) {
                console.log('Widget initialization error:', error);
              }
            }
          }, 150); // Slightly longer delay
        };

        script.onerror = () => {
          console.error('Failed to load SimplePractice script');
          scriptRef.current = null;
        };

        document.head.appendChild(script);
        scriptRef.current = script;
      }, isFirstMount.current ? 0 : 200); // Longer delay on navigation

      isFirstMount.current = false;
    };

    // Load widget
    loadWidget();

    // Cleanup function
    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, [pathname]); // Re-run when pathname changes (navigation)

  return (
    <div ref={widgetRef} className="spwidget-button-wrapper">
      <a
        href="https://mary-lehoux.clientsecure.me"
        className="py-4 flex whitespace-nowrap group font-semibold transition-all duration-500 items-center gap-4 z-10 relative overflow-hidden w-full rounded-[12px] shadow-sm px-5 bg-accent-blue-light text-xl text-text-dark hover:text-white"
        data-spwidget-scope-id="2ba54507-a7cc-47b8-9bc4-f867683f6302"
        data-spwidget-scope-uri="mary-lehoux"
        data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
        data-spwidget-scope-global
        data-spwidget-autobind
      >
        Request Appointment
        <span className="bg-accent-blue-dark absolute rounded-[12px] -z-10 size-full inset-0 scale-0 transition-all duration-500 group-hover:scale-100" />
      </a>
    </div>
  );
}