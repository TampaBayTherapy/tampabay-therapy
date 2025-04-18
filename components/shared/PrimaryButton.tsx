import { cn } from "@/lib/utils";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";

export default function PrimaryButton({
  className,
  children,
  href,
  disabled = false,
  type = "button",
}: {
  className?: string;
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  if (href)
    return (
      <Link
        href={href}
        className={cn(
          `py-4 flex whitespace-nowrap group font-semibold transition-all duration-500 items-center gap-4 z-10 relative overflow-hidden w-fit rounded-[12px] shadow-sm px-5 bg-accent-blue-light text-text-dark hover:text-white`,
          className
        )}
      >
        {children}
        <FaArrowRight />
        <span className="bg-accent-blue-dark absolute rounded-[12px] -z-10 size-full inset-0 scale-0 transition-all duration-500 group-hover:scale-100" />
      </Link>
    );

  return (
    <Button
      type={type}
      disabled={disabled}
      className={cn(
        `py-4 flex whitespace-nowrap group font-semibold cursor-pointer transition-all duration-500 items-center gap-4 z-10 relative overflow-hidden w-fit rounded-[12px] shadow-sm px-5 bg-accent-blue-light text-text-dark hover:text-white`,
        className
      )}
    >
      {children}
      <span className="bg-accent-blue-dark absolute rounded-[12px] -z-10 size-full inset-0 scale-0 transition-all duration-500 group-hover:scale-100" />
    </Button>
  );
}
