"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Make sure you have this utility

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  return (
    <Breadcrumb>
      <BreadcrumbList className="uppercase text-text-dark italic">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link 
              href="/" 
              className={cn(
                "hover:text-accent-blue-dark transition-colors",
                pathname === "/" ? "text-accent-blue-dark" : ""
              )}
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.length > 0 && <BreadcrumbSeparator />}

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isActive = pathname === href;
          const decodedSegment = decodeURIComponent(segment);

          return (
            <BreadcrumbItem key={href}>
              {index === pathSegments.length - 1 ? (
                <BreadcrumbPage className={isActive ? "text-accent-blue-dark" : ""}>
                  {decodedSegment}
                </BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className={cn(
                        "hover:text-accent-blue-dark transition-colors",
                        isActive ? "text-accent-blue-dark" : ""
                      )}
                    >
                      {decodedSegment}
                    </Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}