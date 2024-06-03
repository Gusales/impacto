import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff } from 'lucide-react'
import { useState } from "react";

import Logo from '@/assets/Logo.svg'
import { useSearchParams } from "react-router-dom";

document.title = "Login || Impacto"
export function Login(){
  const [searchParams, setSearchParams] = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  function handleShowPassword() {
    setShowPassword(state => !state)
  }

  function handleUpdateSearchParams(param: string){
    setSearchParams(state => {
      state.set('login', param)
      return state
    })
  }

  const login = searchParams.get('login') ? searchParams.get('login') : ""

  return (
    <div className="lg:grid lg:grid-cols-2 flex items-center">
      <main className="mt-8 flex flex-col items-center *:w-full gap-6 w-[90%] pl-[10%] pb-4">
        <figure className="flex justify-center"><img src={Logo} alt="Logo da Impacto" /></figure>
        <h1 className="text-4xl font-bold leading-relaxed">Acesse a Plataforma</h1>
        <p>Faça login ou registre-se para começar a impactar vidas ainda hoje.</p>

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
      </main>
      <section className="bg-login bg-cover h-screen hidden lg:flex flex-col relative items-center">
        <p className="block mt-16 font-medium">Seja a mudança que você deseja ver no mundo. <br /> Comece agora mesmo na Impacto!</p>

        <div className="w-full flex flex-col mt-12 gap-2">
          <button className={`p-5 w-[175px] text-white ${login === 'user' && "bg-white font-bold text-black"} rounded-r-full`} onClick={() => handleUpdateSearchParams("user")}>Login usuário</button>
          <button className={`p-5 w-[175px] text-white ${login === 'ong' && "bg-white font-bold text-black"} rounded-r-full`} onClick={() => handleUpdateSearchParams("ong")}>Login ONG's</button>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-full">
          <figure>
            <img src={Logo} alt="" />
          </figure>

          <h2 className="font-medium text-xl uppercase">Unindo causas, Transformando vidas!</h2>
        </div>
      </section>
    </div>
  )
}