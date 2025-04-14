"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
// import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import Image from "next/image"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-[1px] border-gray-200", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium",
          "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <div className="relative">
          <div className={cn(
            "size-[40px] rounded-full border border-b-[4px] border-gray-200 flex items-center justify-center",
            "transition-all duration-300",
            "group-data-[state=open]:border-blue-500 group-data-[state=open]:border-b-4",
            "shadow-[0px_0px_0px_0px_#eeeeee]"
          )}
         >
            <Image 
              width={24} 
              height={24} 
              src="/assets/arrow-icon.svg" 
              alt="arrow"
              className={cn(
                "transition-transform duration-300",
                "group-data-[state=open]:rotate-180"
              )}
            />
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
