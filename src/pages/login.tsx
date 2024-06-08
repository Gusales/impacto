import { LoginUserForm } from "@/components/login-user-form";
import { LoginOngForm } from "@/components/login-ong-form";

import Logo from '@/assets/Logo.svg'
import Bridge from '@/assets/bridge-logo.svg'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectLanguages } from "@/components/languages";


document.title = "Login || Impacto"
export function Login(){
  const [loginType, setLoginType] = useState<'user' | 'ong'>('user')
  const { t } = useTranslation()

  function handleChangeLogin() {
    setLoginType(state => {
      return state === "user" ? "ong" : "user"
    })
  }
  

  return (
    <div className="lg:grid lg:grid-cols-2 flex items-center">
      <main className="mt-8 flex flex-col items-center *:w-full gap-6 w-[90%] pl-[10%] pb-4">
        <div className="flex items-center gap-2">
          <img src={Bridge} className="w-12" />
          <h2 className="font-semibold text-xl uppercase text-[#004AAD]">
            {t('loginSlogan')}
          </h2>
        </div>
        <h1 className="text-4xl font-bold leading-relaxed">{t('loginTitle')}</h1>
        <p>{t('loginFrase')}</p>

        {
          loginType === 'user' ? <LoginUserForm /> : <LoginOngForm />
        }

      </main>
      <section className="bg-login bg-cover h-screen hidden lg:flex flex-col relative items-center">
        <div className="block mt-16 font-medium text-center text-xl">
          <p>{t('loginTextPart1')}</p>
          <p>{t('loginTextPart2')}</p>
        </div>

        <div className="w-full flex flex-col mt-12 gap-2">
          <button className={`p-5 w-[175px] ${loginType === 'user' ? "text-black bg-white font-bold" : "text-white"} rounded-r-full`} onClick={handleChangeLogin}>
            {t('loginButtonUser')}
          </button>
          <button className={`p-5 w-[175px] ${loginType === 'ong' ? "text-black bg-white font-bold" : "text-white"} rounded-r-full`} onClick={handleChangeLogin}>
          {t('loginButtonONG')}
          </button>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-full">
          <figure>
            <img src={Logo} alt="" className="w-[200px]" />
          </figure>
        </div>
      </section>
    </div>
  )
}