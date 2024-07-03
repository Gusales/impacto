import Criancas from "@/assets/imagens-voluntariado/criancas.png";
import Animais from "@/assets/imagens-voluntariado/animais.png";
import CombateAFome from "@/assets/imagens-voluntariado/combate-a-fome.png";
import Idosos from "@/assets/imagens-voluntariado/idosos.png";
import SituacaoDeRua from "@/assets/imagens-voluntariado/situacao-de-rua.png";
import Outros from "@/assets/imagens-voluntariado/outros.png";
import Proa from "../Home/assets/instituto-proa.jpg";
import MissaoVida from "../Home/assets/missao-vida.png";
import PulseMais from "../Home/assets/pulse-mais.jpg";

import { Tag } from "../Doacoes/components/tag";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LoginRedirectModal from "@/components/components-impacto/LoginRedirectModal";

export function Voluntariado() {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();
  const handleCandidatarClick = () => {
    setModalOpen(true);
  };
  return (
    <div className="flex flex-col items-center">
      <main className="w-4/5 pb-8">
        <div className="flex gap-20">
          <div className="flex flex-col items-center justify-center">
            <img src={Criancas} alt="Icone de Crianças" />
            <Tag>Crianças</Tag>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Animais} alt="Icone de Pata de Cachorro" />
            <Tag>Animais</Tag>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={CombateAFome} alt="Icone de alimentos" />
            <Tag>Combate à fome</Tag>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Idosos} alt="Icone de dois idosos" />
            <Tag>Idosos</Tag>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <img src={SituacaoDeRua} alt="Icone de Camiseta" />
            <Tag>Situação de rua</Tag>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Outros} alt="Icone de Opções" />
            <Tag>Outros</Tag>
          </div>
        </div>
        <div className="text-[#004358] font-semibold text-2xl mt-12">
          <h2>VAGA IDEAL PARA VOCÊ</h2>
        </div>
        <div className="flex">
          <div className="flex flex-col sm:flex-row justify-between">
            <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] m-2 p-5">
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div>
                    <h2 className="text-[28px] font-semibold mr-14">
                      {t("vagaproa")}
                    </h2>
                    <p className="text-base text-[18px] mb-2">
                      {t("informacoesproa")}
                    </p>
                  </div>
                  <img
                    src={Proa}
                    alt="Logo da ONG"
                    className="object-cover rounded-[10px] w-[75px] h-[75px]"
                  />
                </div>
              </div>

              <p className="font-[500] pl-1">{t("requisitos")}</p>
              <ul className=" text-[18px] font-[500] list-disc p-7">
                <li>{t("requisitoproaum")}</li>
                <li>{t("requisitoproadois")}</li>
                <li>{t("requisitoproatres")}</li>
              </ul>
              <div className="text-center">
                <button
                  className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]"
                  onClick={handleCandidatarClick}
                >
                  {t("candidatar")}
                </button>
              </div>
            </section>

            <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] m-2 p-5">
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div>
                    <h2 className="text-[28px] font-semibold mr-14">
                      {t("vagamissaovida")}
                    </h2>
                    <p className="text-base text-[18px] mb-2">
                      {t("informacoesmissaovida")}
                    </p>
                  </div>
                  <img
                    src={MissaoVida}
                    alt="Logo da ONG"
                    className="object-cover rounded-[10px] w-[75px] h-[75px]"
                  />
                </div>
              </div>

              <p className="font-[500] pl-1">{t("requisitos")}</p>
              <ul className=" text-[18px] font-[500] list-disc p-7">
                <li>{t("requisitomissaovidaum")}</li>
                <li>{t("requisitomissaovidadois")}</li>
                <li>{t("requisitomissaovidatres")}</li>
              </ul>
              <div className="text-center">
                <button
                  className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]"
                  onClick={handleCandidatarClick}
                >
                  {t("candidatar")}
                </button>
              </div>
            </section>

            <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] m-2 p-5">
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div>
                    <h2 className="text-[28px] font-semibold mr-14">
                      {t("vagapulsemais")}
                    </h2>
                    <p className="text-base text-[18px] mb-2">
                      {t("informacoespulsemais")}
                    </p>
                  </div>
                  <img
                    src={PulseMais}
                    alt="Logo da ONG"
                    className="object-cover rounded-[10px] w-[75px] h-[75px]"
                  />
                </div>
              </div>

              <p className="font-[500] pl-1">{t("requisitos")}</p>
              <ul className=" text-[18px] font-[500] list-disc p-7">
                <li>{t("requisitopulsemaisum")}</li>
                <li>{t("requisitopulsemaisdois")}</li>
                <li>{t("requisitopulsemaistres")}</li>
              </ul>
              <div className="text-center">
                <button
                  className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]"
                  onClick={handleCandidatarClick}
                >
                  {t("candidatar")}
                </button>
              </div>
            </section>
          </div>
        </div>
        <LoginRedirectModal open={modalOpen} onOpenChange={setModalOpen} />
      </main>
    </div>
  );
}
