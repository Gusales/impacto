import { useTranslation } from "react-i18next"


function HomeContent() {
    const { t } = useTranslation()

    return (
        <>
            <main>
                    <div>
                        <h2 className="text-[28px] font-[500] m-5">{t('recomendacoesDia')}</h2>
                        <p className="font-[#313131] text-[18px] ml-5">{t('conhecaOng')}</p>


                        <div className="flex m-5 mb-28 justify-between">
                            <a href="#"><img className="rounded-xl" src="https://via.placeholder.com/350" alt="Logo da ONG" /></a>
                            <a href="#"><img className="rounded-xl" src="https://via.placeholder.com/350" alt="Logo da ONG" /></a>
                            <a href="#"><img className="rounded-xl" src="https://via.placeholder.com/350" alt="Logo da ONG" /></a>
                        </div>
                    </div>

                <div className="m-5">
                    <h2 className="m-5 font-[600] text-[28px]">{t('vagaIdeal')}</h2>

                    <div className="flex justify-between">
                        <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] p-5">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h2 className="text-[28px] font-semibold mr-14">{t('tituloVaga')}</h2>
                                        <p className="text-base text-[18px] mb-2">{t('informacoes')}</p>
                                    </div>
                                    <img src="https://via.placeholder.com/75" alt="Logo da ONG" className="object-cover rounded-[10px]" />
                                </div>
                            </div>

                            <p className="font-[500] pl-1">{t('requisitos')}</p>
                            <ul className=" text-[18px] font-[500] list-disc p-7">
                                <li>{t('requisitoa')}</li>
                                <li>{t('requisitoa')}</li>
                                <li>{t('requisitoa')}</li>
                            </ul>
                            <div className="text-center">
                                <button className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]">{t('candidatar')}</button>
                            </div>
                        </section>

                        <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] p-5">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h2 className="text-[28px] font-semibold mr-14">{t('tituloVaga')}</h2>
                                        <p className="text-base text-[18px] mb-2">{t('informacoes')}</p>
                                    </div>
                                    <img src="https://via.placeholder.com/75" alt="Logo da ONG" className="object-cover rounded-[10px]" />
                                </div>
                            </div>

                            <p className="font-[500] pl-1">{t('requisitos')}</p>
                            <ul className=" text-[18px] font-[500] list-disc p-7">
                                <li>{t('requisitoa')}</li>
                                <li>{t('requisitoa')}</li>
                                <li>{t('requisitoa')}</li>
                            </ul>
                            <div className="text-center">
                                <button className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]">{t('candidatar')}</button>
                            </div>
                        </section>

                        <section className="shadow-xl bg-[#DAF1FFAD] max-w-[400px] rounded-[24px] p-5">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h2 className="text-[28px] font-semibold mr-14">{t('tituloVaga')}</h2>
                                        <p className="text-base text-[18px] mb-2">{t('informacoes')}</p>
                                    </div>
                                    <img src="https://via.placeholder.com/75" alt="Logo da ONG" className="object-cover rounded-[10px]" />
                                </div>
                            </div>

                            <p className="font-[500] pl-1">{t('requisitos')}</p>
                            <ul className=" text-[18px] font-[500] list-disc p-7">
                                <li>{t('requisitoa')}</li>
                                <li>{t('requisitoa')}</li>
                                <li>{t('requisitoa')}</li>
                            </ul>
                            <div className="text-center">
                                <button className="bg-[#004AAD] text-white font-[600] py-2 px-4 rounded-[10px]">{t('candidatar')}</button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
export default HomeContent