import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/default-layout";

import { Home } from "./pages/Home/home";
import { Login } from "./pages/Login/login";
import { Register } from "./pages/Register/register";
import { ShoppingPage } from "./pages/Shopping/shopping";
import { Doar } from "./pages/Doar/doar";
import { Sobre } from "./pages/Sobre/sobre";
import { Doacoes } from "./pages/Doacoes/doacoes";
import { Voluntariado } from "./pages/Voluntariado/voluntariado";
import { Rifa } from "./pages/Rifa/rifa";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/doar" element={<Doar />} />
        <Route path="/sobrenos" element={<Sobre />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="/voluntario" element={<Voluntariado />} />
        <Route path="/rifa" element={<Rifa />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}