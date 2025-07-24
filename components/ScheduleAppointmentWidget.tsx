"use client";

import Script from "next/script";

export default function AppointmentRequestWidget() {
  return (
    <>
      {/* Scoped widget styles */}
      {/* <style jsx global>{`
        .spwidget-button-wrapper {
          text-align: center;
        }
        .spwidget-button {
          display: inline-block;
          padding: 12px 24px;
          color: #fff !important;
          background: #de6a26;
          border: 0;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .spwidget-button:hover {
          background: #d15913;
        }
        .spwidget-button:active {
          color: rgba(255, 255, 255, 0.75) !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset;
        }
      `}</style> */}

      {/* The button itself */}
      <div className="spwidget-button-wrapper">
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

      {/* Load the SimplePractice widget script after hydration */}
      <Script
        src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"
        strategy="afterInteractive"
      />
    </>
  );
}
