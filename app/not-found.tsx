import InnerLayout from "@/components/InnerLayout";
import { domAnimation, LazyMotion } from "framer-motion";
import "./globals.css";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function NotFound() {
  return (
    <LazyMotion features={domAnimation}>
      <InnerLayout>
        <div className="grid min-h-[calc(100vh-400px)] place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center flex flex-col items-center gap-6">
            <p className="text-base font-semibold text-accent-blue-dark">404</p>
            <h1 className="mt-4 text-h2 font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-paragraph">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <PrimaryButton href="/">
              Back to Home
            </PrimaryButton>
           
          </div>
        </div>
      </InnerLayout>
    </LazyMotion>
  );
}
