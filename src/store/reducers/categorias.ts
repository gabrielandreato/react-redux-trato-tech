import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ICategorias from "./interfaces/ICategorias";
import categoriasService from "../../services/categoriaService";

const estadoInicial: ICategorias[] = [];

export const buscarCategorias = createAsyncThunk(
    'categorias/buscar',
    categoriasService.buscar
)

const categoriasSlice = createSlice({
    name: "categorias",
    initialState: estadoInicial,
    reducers: {
        adicionarCategorias: (state, {payload}) => {
            state.push(...payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            buscarCategorias.fulfilled,
            (state, { payload }) => {
                state.push(...payload);
            }
        )
    }
})

export const {adicionarCategorias} = categoriasSlice.actions;

export default categoriasSlice.reducer;