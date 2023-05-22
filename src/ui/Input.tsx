import { ComponentPropsWithRef, forwardRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
  id: string;
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, id, placeholder, ...props }, forwardedRef) => (
    <fieldset className="relative flex w-full">
      <input
        className="peer text-gray-800 h-[45px] w-full text-[18px] leading-none outline-none border-b-2 border-gray-400 transition-colors duration-300 focus-within:border-main-accent placeholder:!text-transparent"
        {...props}
        id={id}
        name={id}
        placeholder=" " // this must have a value to make effect in label, because we use peer-placeholder-shown
        ref={forwardedRef}
      />
      <label
        className="absolute top-0 text-xs font-medium text-gray-400 -translate-y-full select-none pointer-events-none w-full transition-[position_color] duration-300 peer-focus-within:top-0 peer-placeholder-shown:top-1/2 peer-focus-within:text-xs peer-placeholder-shown:text-base peer-placeholder-shown:-translate-y-1/2 peer-focus-within:-translate-y-full peer-focus-within:font-medium peer-placeholder-shown:font-normal peer-focus-within:text-main-accent"
        htmlFor={id}
      >
        {placeholder}
      </label>
    </fieldset>
  )
);
