import DoeParaTodos from '@/assets/imagens-doacoes/doe_para_todos.png'

import PulseMais from '../Sobre/assets/images/parceiros/pulse_mais.jpg'
import Proa from '../Sobre/assets/images/parceiros/instituto_proa.jpg'
import MissaoVida from '@/pages/Home/assets/missao-vida.png'

import { Tag } from "./components/tag";
import { Ong } from "./components/ong";
import { useTranslation } from "react-i18next";

const ongs = [
  {
    id: 2,
    nome: "Pulse mais",
    sobreOng: "🚀 Incluimos jovens de baixa renda no universo da tecnologia através de educação, mentoria e conexão com mercado",
    image: PulseMais
  },
  {
    id: 1,
    nome: "Instituto PROA",
    sobreOng: "Ajudamos jovens a conquistarem seus sonhos! 💙 oferecemos cursos gratuitos de preparo pro mercado de trabalho!",
    image: Proa
  },
  {
    id: 3,
    nome: "Missão Vida",
    sobreOng: "Nossa objetivo consiste em ajudar e esclarecer aos nossos visitantes das mais variadas matérias sobre a solidariedade, assim como divulgar os valores que contribuem positivamente para o enriquecimento pessoal do solidário. Todas as pessoas necessitam de apoio em um dado momento.",
    image: MissaoVida
  },
]

export function Doacoes(){
  document.title = "Faça uma doação || Impacto"
  const { t } = useTranslation()
  
  return(
    <div className="flex flex-col items-center">
      <main className="w-4/5 pb-8">
         <h2 className="text-2xl font-medium">
          {t('doacoesAcoesRapidas')}
         </h2>

         <section className="flex flex-col gap-4 lg:grid grid-cols-2 lg:gap-x-4 mt-8">
          <article className="bg-[#DAF1FF] p-4 rounded-2xl shadow-lg flex justify-between gap-4">
            <div className="flex flex-col justify-between items-center sm:items-start gap-4">
              <h3 className="text-xl font-medium">
                {t('doacoesDoeParaTodos')}
              </h3>
              <p className="sm:w-3/4 text-sm">
                {t('doacoesDoeParaTodosText')}
              </p>
              <button className="w-fit py-1  px-7 text-white bg-[#004AAD] font-medium hover:opacity-85 transition-all rounded">
                {t('doacoesDoeAqui')}
              </button>
            </div>
            <figure className="w-full hidden sm:flex items-center justify-center lg:w-[300px] xl:w-[200px]">
              <img 
                src={DoeParaTodos} 
                alt={t('doacooesDoeParaTodosImageAlt')} 
                className="h-[150px] w-[75px] lg:h-full lg:w-full"  
              />
            </figure>
          </article>
          <article className="bg-[#DAF1FF] p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center sm:justify-start">
            <h3 className="text-xl font-medium">
              {t('doacoesFavoritosTitle')}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-sm font-light sm:w-3/4 text-center text-[#565656]">
                {t('doacoesFavoritosEmpty')}
              </p>
            </div>
          </article>
         </section>

         <section>
          <h1 className="text-2xl font-bold mt-6">
            {t('doacoesFacaUma')}
          </h1>
          <p className="text-lg mt-1">
            {t('doacoesFacaUmaText')}
          </p>

          <div className="mt-4">
            <h2 className="text-xl font-medium">
              {t('doacoesCausas')}
            </h2>

            <div className="w-full flex flex-wrap justify-between mt-1 mb-8 gap-y-4">
              <Tag>{t('doacaoCausaCriança')}</Tag>
              <Tag>{t('doacaoCausaAnimais')}</Tag>
              <Tag>{t('doacaoCausaCombateFome')}</Tag>
              <Tag>{t('doacaoCausaIdosos')}</Tag>
              <Tag>{t('doacaoCausaSituacaoRua')}</Tag>
              <Tag>{t('doacaoCausaOutros')}</Tag>
            </div>
          </div>

          <ul className="space-y-5">
            {
              ongs.map(ong => (
                <Ong idOng={ong.id} image={ong.image} nome={ong.nome} sobreOng={ong.sobreOng} key={String(ong.id)} />
              ))
            }
          </ul>
            <div className="w-full flex items-center justify-center">
              <button className="mt-5 text-xl hover:underline hover:underline-offset-2">
                {t('vejaMais')}
              </button>
            </div>
          
         </section>
      </main>
    </div>
  )
}