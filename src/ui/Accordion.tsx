import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const AccordionRoot = forwardRef<
  HTMLDivElement,
  Accordion.AccordionSingleProps
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Root
    className="w-full h-auto mx-auto max-w-7xl my-10 "
    defaultValue="item-1"
    collapsible
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Root>
));

export const AccordionItem = forwardRef<
  HTMLDivElement,
  Accordion.AccordionItemProps
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Item
    className="overflow-hidden first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-400 [&_button]:last:shadow-gray-200  [&_button]:last:shadow-[0_2px_0]"
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  Accordion.AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Header className="flex cursor-pointer">
    <Accordion.Trigger
      className="shadow-gray-200 shadow-[inset_0_-2px_0] hover:bg-gray-50 transition-colors group flex h-[45px] flex-1 items-center justify-between bg-white px-5 text-[18px] leading-none outline-none font-semibold"
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-main-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 h-6 w-6"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

export const AccordionContent = forwardRef<
  HTMLDivElement,
  Accordion.AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Content
    className="text-gray-500 bg-gray-50 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[18px]"
    {...props}
    ref={forwardedRef}
  >
    {/* dont give the padding or margin in Accordion.Content but give in the children, it will make the website "like-lagging" but it's not actually lagging it just effect dom suddenly appear and give the padding or margin abruptly*/}
    <span className="py-5 px-10 block font-semibold">{children}</span>
  </Accordion.Content>
));
