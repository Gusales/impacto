import Destaques from "@/pages/Home/Components/destaques"
import { Header } from "@/components/components-impacto/header/header"
import Footer from "@/components/components-impacto/footer"
import HomeContent from "@/pages/Home/Components/home-content"

export function Home(){
  document.title = "Impacto"
  return(
    <>
      <Header />
      <Destaques />
      <HomeContent />
      <Footer />
    </>
   
  )
}