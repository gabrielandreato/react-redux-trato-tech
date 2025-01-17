import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PaginaPadrao from "./components/PaginaPadrao/PaginaPadrao";
import Home from "./pages/Home/Home";
import Categoria from "./pages/Categoria/Categoria";
import Carrinho from "./pages/Carrinho/Carrinho";
import Anuncie from "./pages/Anuncie/Anuncie";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<PaginaPadrao/>}>
                    <Route index element={<Home />} />
                    <Route path={"/categoria/:nomeCategoria"} element={<Categoria />} />
                    <Route path={"carrinho"} element={<Carrinho />} />
                    <Route path={"anuncie"} element={<Anuncie />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}