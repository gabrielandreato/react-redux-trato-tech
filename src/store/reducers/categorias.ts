import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ICategorias from "./interfaces/ICategorias";
import categoriasService from "../../services/categoriaService";
import {createStandaloneToast} from "@chakra-ui/toast";

const estadoInicial: ICategorias[] = [];

export const carregarCategorias = createAction('categorias/carregarCategorias');

export const buscarCategorias = createAsyncThunk(
    'categorias/buscar',
    categoriasService.buscar
)

const {toast} = createStandaloneToast()

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
    extraReducers: (builder) => {
        builder.addCase(
            buscarCategorias.fulfilled,
            (state, { payload }) => {
                toast({
                    title: 'Sucesso!',
                    description: "Categorias carregadas com sucesso!",
                    duration: 2000,
                    status: 'success',
                    isClosable: true,
                })
                return payload;
            }
        )
            .addCase(
                buscarCategorias.pending,
                (state, {payload}) => {
                    toast({
                        title: 'Carregando',
                        description: "Carregando categorias...",
                        duration: 2000,
                        status: 'loading',
                        isClosable: true,
                    })
                }
            )
            .addCase(
                buscarCategorias.rejected,
                (state, {payload}) => {
                    toast({
                        title: 'Erro',
                        description: "Erro na busca de categorias",
                        duration: 2000,
                        status: 'error',
                        isClosable: true,
                    })
                }
            )
    }
})

export const {adicionarCategorias, adicionarTodasAsCategorias} = categoriasSlice.actions;

export default categoriasSlice.reducer;