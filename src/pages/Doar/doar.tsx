import { Instagram } from 'lucide-react'
import { DialogDoacao } from './components/dialog-doacao'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ongs } from '@/data/ongs'

interface OngProps{
  nome: string
  banner: string
  image: string
  sobre: string,
  imagePost: string,
  ig: string
}

export function Doar(){
  const [thisOng, setThisOng] = useState<OngProps>({
    banner: '',
    image: '',
    nome: '',
    sobre: '',
    imagePost: '',
    ig: ''
  })
  const { id } = useParams()

  const ong = ongs.find(item => item.id === Number(id))
  if (!ong) return;

  useEffect(() => {
    if (ong) {
      setThisOng(ong)
    }
  }, [])

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])

  const extractUsername = (url: string) => {
    const regex = /https:\/\/www\.instagram\.com\/([^\/]+)\/?/;
    const match = url.match(regex);

    if (match) {
      return match[1];
    }
    return '';
  };

  return(
    <div className="flex flex-col items-center">
      <div className="max-w-[80vw] mb-10">
        <section className="relative">
          <img src={thisOng.banner} alt="Capa da ONG" className="rounded-t-full w-full md:h-80 object-cover" />
          <img src={thisOng.image} alt="Logo da ONG" className="border-2 border-blue-900 rounded-full h-24 md:h-[210px] absolute -bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden hover:scale-105 transition-all" />
        </section>

        <section className="mt-14 border-b border-b-[#373F42] pb-5">
          <p className="text-xl mb-4">São Paulo, SP</p>
          <h2 className="text-2xl font-medium mb-6">{thisOng.nome}</h2>
          <p className="text-xl mb-6">
            {thisOng.sobre}</p>
        </section>

        <div className="flex flex-col items-center justify-center mt-10 text-[#004358] text-3xl gap-1">
          <h1 className="font-semibold">Colabore com <b className="font-semibold">{thisOng.nome}</b></h1>
          <h2 className="font-medium">Faça sua doação</h2>
        </div>

        <section className="mt-14 flex flex-col gap-y-3 md:grid grid-cols-2">
          <section className="h-full flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-10 text-xl w-full">
              <p>Transferências via PIX do banco que você tem conta para:</p>
              <p className="font-semibold text-[#15406B]">Organização Social</p>
              <p>CNPJ: 29.936.002/0001-79</p>
              <p>Por favor, confirme a baixo que você fará a doação via PIX. </p>
              <p>Essa confirmação é muito importante para identificarmos a sua doação!</p>
            </div>

            <DialogDoacao />
          </section>

          <section className="flex flex-col gap-5 items-end text-[#15406B]">
            <div className="w-full sm:w-4/5">
              <img src={thisOng.imagePost} alt="" className="object-cover" />
              <p className="w-full text-center text-xl my-5">Telefone: +55 3670-2911</p>
              <div className="flex flex-col items-start w-full gap-2">
                <a href={thisOng.ig} target="_blank" className="flex items-center text-xl gap-2 hover:underline underline-offset-2">
                  <div className="bg-[#004358] w-fit p-2 rounded-full">
                    <Instagram strokeWidth={2} stroke="white" />
                  </div>
                  <p>
                    @{extractUsername(thisOng.ig)}
                  </p>
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}