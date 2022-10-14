import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex item-center gap-3 py-4 px-3 bg-gray-100 w-full focus-within:ring-2 ">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: React.ReactNode;
  asChild?: boolean;
}

function TextInputIcon({ children, asChild }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <>
      <input
        {...props}
        className="bg-transparent flex-1 text-gray-800 outline-none text-sm placeholder:text-gray-400"
      />
    </>
  );
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
