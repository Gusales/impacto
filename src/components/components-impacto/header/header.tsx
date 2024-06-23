import { Input } from '@/components/shadcnUI/input'
import { SelectLanguages } from '@/components/components-impacto/header/Components/languages'

import { Search } from 'lucide-react'
import Logo from '@/assets/images-impacto/Logo.svg'

import Login from '@/assets/images-header/login.png'
import Moeda from '@/assets/images-header/moeda.png'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export function Header(){
  const { t } = useTranslation()

  return (
    <header className="w-full flex flex-col items-center gap-4 shadow-md fixed top-0 z-10 bg-white">
      <div className="bg-linear-blue w-full flex pt-4 pb-3 justify-center shadow-md">
        <div className="w-[80%] flex items-center justify-between">
         <NavLink to="/">
            <figure>
              <img src={Logo} alt="Logo da Impacto" className="w-[68px]" />
            </figure>
         </NavLink>
          

          <NavLink to="/sobrenos" className="transition-all hover:underline hover:underline-offset-2">{t('headerSobreNos')}</NavLink>
          <a href="" className="transition-all hover:underline hover:underline-offset-2">{t('headerDoacao')}</a>
          <a href="" className="transition-all hover:underline hover:underline-offset-2">{t('headerTrabalhoVoluntario')}</a>

          <div className="flex gap-2 items-center cursor-pointer hover:underline">
            <img src={Login} alt="" className="h-[40px] w-[40px]" />
            <NavLink to="/login">{t('headerEntrar')}</NavLink>
          </div>

          <SelectLanguages />
        </div>
      </div>

      <div className="flex items-center justify-between w-[80%] gap-5 pb-4">
        <div className="flex-1 relative">
          <Input placeholder={t('headerInputPlaceholder')} className="w-full bg-[#EDEDED] px-5 py-3" />
          <Search className="absolute top-5 right-3 -translate-y-1/2 -translate-x-1/2" />
        </div>
        <NavLink to="/shopping" className="cursor-pointer flex items-center gap-2 hover:underline hover:underline-offset-2">
          <img src={Moeda} alt="icone de moeda" />
          <p>{t('headerPontos')}</p>  
        </NavLink> 
      </div>
    </header>
  )
}