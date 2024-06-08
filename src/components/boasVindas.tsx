import { useTranslation } from "react-i18next";

function BoasVindas() {
    const { t } = useTranslation()

    return (
        <>
            <div className="flex items-center justify-between h-screen bg-[#DAF1FF] p-5 text-black shadow-[0px_4px_10px_0px_#807e7e]">
                <div className="text-center">
                    <h1 className="text-[28px] font-semibold leading-[35px] text-[#061314] uppercase">{t('boasVindasH1')}</h1>
                    <p className="max-w-[60%] mx-auto mt-[88px]">{t('boasVindasP')}</p>
                    <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px] uppercase'>{t('boasVindasButton')}</button></a>
                </div>

                <img src="https://s3-alpha-sig.figma.com/img/8b9d/7f90/28fbe8b8e02c81036a7e55595df7cb37?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oiK079jzMgaighSCGjlCYz6J9vUWcn3HyQ6b9UHr3NZl~vY1HYGyxYmQllsRP9x3siRzOJFLjg9n69fj6PrNxng~RlzoCZ5BZX~oeKzGIDJze4Q3Ynj4l-zxkyM0LvFjC3BUHyJWvHFPcBPDukDrhUBM0uc2hNpoGhxIbucaF2X-2JctCcC9OsMB9qnuE0LKckhAAeQN6gSJ0hhtAJm3qafhjK6zsJFEh1ZDqJ6nWK5kofkwlWLPtKbORLZRlKiTHhjTto71MN0ioyVtsPFxbnTP-laOMaYtcCpPd~Gc6KwfoTh3gwNS9CsV0G-wUjEjJeb613VgsjDTYfek1IVg2w__" className="max-w-[40%] h-[600px] mr-[164px]" alt="" title="" />
            </div>
        </>
    );
};
export default BoasVindas;