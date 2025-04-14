"use client";

import { useMotionValueEvent, useScroll, m } from "framer-motion";

import { useState } from "react";

import Image from "next/image";

import Link from "next/link";
import navLinks from "@/constants/navLinks";
import AnimatedModalSidebar from "./AnimatedModalSidebar";
import PrimaryButton from "./shared/PrimaryButton";
import { NavLink } from "./shared/NavLink";
import { usePathname } from "next/navigation";

/*
const FallbackComponent = () => (
  <button className="button-two" aria-expanded="false">
    <svg
      stroke="var(--button-color)"
      className="hamburger"
      viewBox="0 0 100 100"
      width="30"
    >
      <line
        className="line top"
        x1="90"
        x2="10"
        y1="40"
        y2="40"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="80"
        strokeDashoffset="0"
      ></line>
      <line
        className="line bottom"
        x1="10"
        x2="90"
        y1="60"
        y2="60"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="80"
        strokeDashoffset="0"
      ></line>
    </svg>
  </button>
);
*/
export default function Header() {
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "small">(
    "top"
  );
  const { scrollY } = useScroll();
  const pathname = usePathname()
  const isHome = pathname === "/"

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest === 0) {
      setHeaderState("top");
    } else if (latest > previous && latest > 50) {
      setHeaderState("hidden");
    } else if (latest < previous) {
      setHeaderState("small");
    }
  });

  return (
    <m.header
      initial={{ y: -150 }}
      animate={{
        y: headerState === "hidden" ? -120 : 0,
      }}
      transition={{ type: "tween", duration: 0.4 }}
      className={`fixed top-0 left-0  w-full z-[1000] `}
    >
      <div className="fixed w-full left-0 right-0 z-[1000]">
        <div
          className={`flex relative px-3 md:px-10 top-0 py-3  items-center justify-between p-3 transition-all duration-300 ${
            headerState === "top"
              ? isHome
                ? "px-10 bg-white/[0.03] backdrop-filter backdrop-blur-md shadow-md" // Homepage on top
                : "bg-transparent shadow-none" // Non-homepage on top
              : isHome
                ? "bg-black/50 shadow-sm shadow-black/[0.3] backdrop-blur-[12px] px-20" // Homepage scrolled
                : "bg-white/50 shadow-sm shadow-gray-200 backdrop-blur-[12px] px-20" // Non-homepage scrolled
          }`}
        >
          {/* Logo Animation */}
          <div
            // initial={{ width: 160, height: 100 }}
            // animate={{
            //   width: headerState === "small" ? 120 : 200,
            //   height: headerState === "small" ? 70 : 100,
            // }}
            // transition={{ type: "tween", duration: 0.2 }}
            className="relative w-[120px] h-[40px] sm:w-[180px] sm:h-[80px]"
          >
            <Link href="/" aria-label="Home">
              <Image
                src="/logo-header.svg"
                priority
                alt="TampaBay Therapy Logo"
                className="object-contain"
                fill
              />
            </Link>
          </div>
          <nav className="hidden lg:block  ">
            <ul className="flex whitespace-nowrap py-3">
              {navLinks.map((link) => (
                <li key={link.title} className="group px-4 relative">
                  <NavLink href={link.href}>{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Animated Items */}
          <div className="flex items-center justify-center whitespace-nowrap gap-x-8">
            <div className="hidden md:block">
              <PrimaryButton href="/">Book an appointment</PrimaryButton>
            </div>

            <div className="lg:hidden">
              <AnimatedModalSidebar />
            </div>
          </div>
        </div>
      </div>
    </m.header>
  );
}
