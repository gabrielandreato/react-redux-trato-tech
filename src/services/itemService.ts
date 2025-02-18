import instance from "../common/config/api";
import {adicionarItens} from "../store/reducers/itens";

export const itemService = {
    buscarItem: async () => {
        const resposta = await instance.get('/itens');
        return resposta.data;
    }
}