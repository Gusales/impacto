import Footer from "@/components/components-impacto/footer";
import { Header } from "@/components/components-impacto/header/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout(){
  return(
    <div className="absolute inset-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}