import { Input } from '@/components/ui/input'
import { SelectLanguages } from './languages'

import { Search } from 'lucide-react'
import Logo from '@/assets/Logo.svg'

import Login from '@/assets/login.png'

export function Header(){
  return (
    <header className="w-full flex flex-col items-center gap-4 shadow-md fixed top-0 z-10 bg-white">
      <div className="bg-linear-blue w-full flex pt-4 pb-3 justify-center shadow-md">
        <div className="w-[80%] flex items-center justify-between">
          <figure>
            <img src={Logo} alt="" className="w-[68px]" />
          </figure>

          <a href="" className="transition-all hover:underline hover:underline-offset-2">Doação</a>
          <a href="" className="transition-all hover:underline hover:underline-offset-2">Trabalho Voluntário</a>

          <div className="flex gap-2 items-center cursor-pointer hover:underline">
            <img src={Login} alt="" className="h-[40px] w-[40px]" />
            <a href="/login">Entrar</a>
          </div>

          <SelectLanguages />
        </div>
      </div>

      <div className="flex items-center justify-between w-[80%] gap-5 pb-4">
        <div className="flex-1 relative">
          <Input placeholder="O que você está procurando?" className="w-full bg-[#EDEDED] px-5 py-3" />
          <Search className="absolute top-5 right-3 -translate-y-1/2 -translate-x-1/2" />
        </div>
        <p>Meus Pontos</p> 
      </div>
    </header>
  )
}