import {createListenerMiddleware} from "@reduxjs/toolkit";
import {adicionarTodasAsCategorias, carregarCategorias} from "../reducers/categorias";
import categoriasService from "../../services/categoriaService";
import {createStandaloneToast} from "@chakra-ui/toast";


export const listener = createListenerMiddleware();
const {toast} = createStandaloneToast()


listener.startListening({
    actionCreator: carregarCategorias,
    effect: async (action, { dispatch, fork, unsubscribe}) => {
        toast({
            title: 'Carregando',
            description: "Carregando categorias...",
            duration: 2000,
            status: 'loading',
            isClosable: true,
        })

        const tarefa  = fork(async api => {
            await api.delay(1000)
            return await categoriasService.buscar()
        });

        const resposta = await tarefa.result;

        if(resposta.status === 'ok'){
            toast({
                title: 'Sucesso!',
                description: "Categorias carregadas com sucesso!",
                duration: 2000,
                status: 'success',
                isClosable: true,
            });
            dispatch(adicionarTodasAsCategorias(resposta.value));
            unsubscribe();
        }

        if (resposta.status === 'rejected'){
            toast({
                title: 'Erro',
                description: "Erro na busca de categorias",
                duration: 2000,
                status: 'error',
                isClosable: true,
            })
        }

    }
})