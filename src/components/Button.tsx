import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <Comp
        {...rest}
        className={clsx(
          "py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-800 transition-colors focus:ring-2 focus:white",
          className
        )}
      >
        {children}
      </Comp>
    </>
  );
}
