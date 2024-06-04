import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";

export function LoginUserForm(){
  const [showPassword, setShowPassword] = useState(false)
  function handleShowPassword() {
    setShowPassword(state => !state)
  }
  return(
    <form action="" className="space-y-9">
      <div className="space-y-5">
        <Label htmlFor="email" className="font-normal">Email</Label>
        <Input id="email" className="w-full bg-[#EDEDED] p-6" placeholder="digite seu email" />
      </div>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <Label htmlFor="password" className="font-normal">Senha</Label>
          <a href="" className="text-[#004AAD] font-semibold hover:underline hover:underline-offset-2">Esqueceu sua senha?</a>
        </div>
        <div className="relative">
          <Input id="password" className="w-full bg-[#EDEDED] p-6" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" />
          <button type="button" onClick={handleShowPassword} className="absolute top-6 right-6 -translate-y-1/2 -translate-x-1/2">
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </div>
      </div>

      <Button type="submit" className="bg-[#004AAD] w-full p-6 font-bold text-xl hover:bg-[#004badda]">
        Entrar
      </Button>

      <div className="flex items-center gap-2">
        <p>Ainda não possui uma conta?</p>
        <a href="" className="text-[#004AAD] font-semibold hover:underline hover:underline-offset-2">Inscreva-se</a>
      </div>
    </form>
  )
}