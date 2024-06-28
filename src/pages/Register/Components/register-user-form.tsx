import { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";

import { Steps } from "./steps";

import { ButtonImpacto } from "@/components/components-impacto/button";
import { Label } from "@/components/shadcnUI/label";
import { InputImpacto } from "@/components/components-impacto/input";
import { Checkbox } from "@/components/shadcnUI/checkbox";

const passos = ["Sobre você", "contato", "senha"]

export function RegisterUserForm(){
  const [step, setStep] = useState(0)
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')

  const asSenhasSaoAsMesmas = senha !== confirmaSenha

  function handleSubChangeStep() {
    setStep(state => state - 1)
  }

  function handleSumChangeStep() {
    setStep(state => state + 1)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    alert('teste')
  }

  return(
    <form action="" onSubmit={handleSubmit} className="space-y-6">
      <Steps etapas={passos} step={step}  />

      {/* Passo 1 - Informações iniciais */}
      <section className={`${step === 0 ? "flex" : "hidden"} flex-col gap-2`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="name">Nome:</Label>
          <InputImpacto id="name" placeholder="Digite seu nome" />
        </div>
        <div className="space-y-4 mb-3">
          <Label htmlFor="cpf">CPF:</Label>
          <InputImpacto id="cpf" placeholder="Digite o seu CPF" />
        </div>
        <div className="space-y-1 mb-3 flex flex-col gap-2">
          <Label htmlFor="genero" className="leading-relaxed mt-0 p-0">Qual seu gênero</Label>
          <select name="genero" id="genero" className="w-fit cursor-pointer">
            <option value="" disabled selected className="hidden">Selecione o sexo...</option>
            <option value="0">Masculino</option>
            <option value="1">Feminino</option>
            <option value="2">Prefiro não informar</option>
          </select>
        </div>
        <div className="mb-3 flex items-center gap-2">
          <Checkbox name="doadorTempo" id="doadorTempo" className="data-[state=checked]:bg-[#004AAD]" />
          <Label htmlFor="doadorTempo" className="leading-relaxed mt-0 p-0">Deseja participar de trabalhos voluntários?</Label>
        </div>
      </section>

      {/* Passo 2 - Sobre a ONG */}
      <section className={`${step === 1 ? "flex" : "hidden"} flex-col`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="email">E-mail:</Label>
          <InputImpacto id="email" placeholder="Digite seu e-mail" />
        </div>

        <div className="space-y-4 mb-3">
          <Label htmlFor="telefone">Telefone:</Label>
          <InputImpacto id="telefone" placeholder="Digite seu telefone" />
        </div>
      </section>

      {/* Passo 4 - Senha */}
      <div className={`${step === 2 ? "flex" : "hidden"} flex-col`}>
        <div className="space-y-4 mb-3">
          <Label htmlFor="senha">Senha:</Label>
          <InputImpacto id="senha" placeholder="Digite sua senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div className="space-y-4 mb-3">
          <Label htmlFor="confirmarSenha">Confirmar senha:</Label>
          <InputImpacto id="confirmarSenha" placeholder="Confirme sua senha" type="password" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
        </div>

        {asSenhasSaoAsMesmas && (
          <span className="text-red-600 font-bold text-sm">As senhas informadas estão diferentes!</span>
        )}
      </div>

      {/* Form Controls */}
      <div className="mt-6 w-full flex flex-col gap-6">
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className={`${step === 0 ? "invisible" : "visible"}`} >
            <ButtonImpacto type="button" variant="secondary" onClick={handleSubChangeStep}>Voltar</ButtonImpacto>
          </div>
          {
            step === 3 ?
            <ButtonImpacto type="submit">
              Cadastrar
            </ButtonImpacto>
            : <ButtonImpacto type="button" onClick={handleSumChangeStep}>
            Continuar
          </ButtonImpacto>
          }
        </div>

        <div className="flex items-center gap-2">
          <p>Já possui uma conta?</p>
          <NavLink to="/login" className="text-[#004AAD] font-semibold hover:underline hover:underline-offset-2">Faça login</NavLink>
        </div>
      </div>
    </form>
  )
}