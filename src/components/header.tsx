import { Input } from '@/components/ui/input'
import { SelectLanguages } from './languages'

import { Search } from 'lucide-react'
import Logo from './logo.svg'

import Login from '@/assets/login.png'

export function Header(){
  return (
    <header className="w-full flex flex-col items-center py-4 gap-4 shadow-md">
      <div className="w-[80%] flex items-center justify-between">
        <figure>
          <img src={Logo} alt="" />
        </figure>

        <a href="" className="transition-all hover:underline hover:underline-offset-2">Doação</a>
        <a href="" className="transition-all hover:underline hover:underline-offset-2">Trabalho Voluntário</a>

        <SelectLanguages />

        <div className="flex gap-2 items-center cursor-pointer hover:underline">
          <img src={Login} alt="" className="h-[40px] w-[40px]" />
          <p>Entrar</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-[80%] gap-5">
        <div className="flex-1 relative">
          <Input placeholder="O que você está procurando?" className="w-full bg-[#EDEDED] px-5 py-3" />
          <Search className="absolute top-5 right-3 -translate-y-1/2 -translate-x-1/2" />
        </div>
        <p>meus pontos</p> 
      </div>
    </header>
  )
}