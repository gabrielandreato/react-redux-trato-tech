import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from "./reducers/categorias";


export const store = configureStore({
    reducer: {
        categorias: categoriasSlice,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch