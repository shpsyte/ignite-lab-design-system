import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
export interface CheckBoxProps {}

export function CheckBox({}: CheckBoxProps) {
  return (
    <>
      <CheckboxPrimitive.Root
        className="w-6 h-6 p=[2px] bg-gray-800 rounded"
        id="check"
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check className="h-5 w-5 text-cyan-500" size={24} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  );
}
