import instance from "../common/config/api";
import {adicionarCategorias} from "../store/reducers/categorias";
import ICategorias from "../store/reducers/interfaces/ICategorias";

const  categoriasService = {
    buscar:  async () => {
        const resposta = await instance.get('/categorias');
        return resposta.data;
    }
}

export default categoriasService;