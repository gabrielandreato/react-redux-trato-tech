import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit'
import categoriasSlice, {buscarCategorias} from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import carrinhoSlice from "./reducers/carrinho";
import buscaSlice from "./reducers/busca";
import {listener} from "./middlewares/categorias";

export const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .prepend(listener.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch