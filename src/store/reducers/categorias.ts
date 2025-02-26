import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ICategorias from "./interfaces/ICategorias";
import categoriasService from "../../services/categoriaService";

const estadoInicial: ICategorias[] = [];

export const carregarCategorias = createAction('categorias/carregarCategorias');

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
        },
        adicionarTodasAsCategorias: (state, {payload}) => {
            return payload;
        }
    },
})

export const {adicionarCategorias, adicionarTodasAsCategorias} = categoriasSlice.actions;

export default categoriasSlice.reducer;