import {BrowserRouter, Route, Routes} from "react-router-dom";
import PaginaPadrao from "./components/PaginaPadrao/PaginaPadrao";
import Home from "./pages/Home/Home";
import Categoria from "./pages/Categoria/Categoria";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<Home />} />
                    <Route path={"/categorias/:nomeCategoria"} element={<Categoria />} />
                </Route>               
            </Routes>
        </BrowserRouter>
    )
}
