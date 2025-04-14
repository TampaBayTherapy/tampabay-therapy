// components/NavLink.tsx
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const isHome = pathname === "/"
  

  return (
    <Link
      href={href}
      className={cn(
        "text-lg relative hover:text-accent-blue-dark  font-semibold transition-colors capitalize flex items-center  justify-between",
        isActive ? "text-accent-blue-dark" : "",
        isHome ? "text-white" :"text-text-dark"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      <span
        className={cn(
          "absolute -bottom-2 w-0 h-[2px] bg-accent-blue-dark group-hover:w-full transition-all duration-500",
          isActive ? "w-full" : ""
        )}
      />
    </Link>
  );
}