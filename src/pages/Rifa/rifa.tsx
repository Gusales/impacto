import { InputImpacto } from "@/components/components-impacto/input";
import Ticket from "./assets/ticket.svg";

export function Rifa() {

    return (
        <div className=" mb-[20px] ">

            <div className="flex items-center gap-5 ml-[135px]">

                <figure>

                    <img className="" src={Ticket} alt="" />

                </figure>

                <p className="text-center text-[#004358] font-medium">CRIAR CAMPANHA</p>

            </div>

            <div className="ml-[283px] mt-[21px]">

                <form className="space-y-7">

                    <div className="mb-[20px] space-y-3">

                        <label className="space-y-3" htmlFor="text">Nome da campanha</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Digite o nome da sua campanha" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Quantidade de bilhetes</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Escolha uma das opções abaixo" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Onde será realizado o sorteio</label>

                        <InputImpacto className="rounded-xl w-3/4" placeholder="Escolha uma das opções abaixo" />

                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Valor do bilhete</label>

                        <div className="flex bg-[#EDEDED] w-3/4 rounded-[10px]">

                            <div className="rounded-xl w-24 bg-[#D7D6D6] flex items-center justify-center">

                                <p className="text-[#004358] font-medium">R$</p>
                            </div>

                            <InputImpacto className="flex-1 rounded-r-[10px]" placeholder="Telefone / WhatsApp" type="tel" />

                        </div>


                    </div>

                    <div className="mb-[20px] space-y-3">

                        <label htmlFor="text">Telefone para contato</label>

                        <div className="flex bg-[#EDEDED] w-3/4 rounded-[10px]">

                            <div className="rounded-xl w-24 bg-[#D7D6D6] flex items-center justify-center">

                                <p className="text-[#004358] font-medium">+55</p>
                            </div>

                            <InputImpacto className="flex-1 rounded-r-[10px]" placeholder="Telefone / WhatsApp" type="tel" />

                        </div>


                    </div>

                </form>

            </div>

        </div>
    )
}