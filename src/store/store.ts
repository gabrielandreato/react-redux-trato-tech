import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";


export const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch