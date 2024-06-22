import { ComponentProps } from "react";
import { Input } from "@/components/shadcnUI/input";

type InputImpactoProps = ComponentProps<'input'>
export function InputImpacto({ ...props}: InputImpactoProps){
  return <Input {...props} className="bg-[#EDEDED] placeholder:text-sm" />
}