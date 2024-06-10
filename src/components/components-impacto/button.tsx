import { ComponentProps } from "react";
import { Button } from "../ui/button";

type ButtonImpactoProps = ComponentProps<'button'> & {
  variant?: "primary" | "secondary"
}
export function ButtonImpacto({ variant = "primary", ...props }: ButtonImpactoProps){
  switch (variant) {
    case 'primary':
      return <Button {...props} variant="default" className="bg-[#004AAD] transition-all hover:bg-[#4483d6] font-semibold" />
    case 'secondary':
      return <Button {...props} variant="secondary" className="bg-transparent hover:bg-zinc-100 w-full border-2 border-[#4483d6] text-[#4483d6] font-bold" />
  }
}