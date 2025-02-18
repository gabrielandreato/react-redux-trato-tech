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
                return payload;
            }
        )
            .addCase(
                buscarCategorias.pending,
                (state, {payload}) => {
                    console.log("Carregando categorias...")
                }
            )
            .addCase(
                buscarCategorias.rejected,
                (state, {payload}) => {
                    console.log("Busca de categorias rejeitada.")
                }
            )
    }
})

export const {adicionarCategorias} = categoriasSlice.actions;

export default categoriasSlice.reducer;