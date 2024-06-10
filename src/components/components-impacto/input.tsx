import { ComponentProps } from "react";
import { Input } from "../ui/input";

type InputImpactoProps = ComponentProps<'input'>
export function InputImpacto({ ...props}: InputImpactoProps){
  return <Input {...props} className="bg-[#EDEDED] placeholder:text-sm" />
}