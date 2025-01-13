import {createSlice} from "@reduxjs/toolkit";
import {ICarrinho} from "./interfaces/ICarrinho";

const initialState: ICarrinho[] = []

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
        mudarCarrinho: (state, {payload}) => {
            const temItem = state.some(item => item.idItem === payload)
            if (!temItem) return [
                ...state,
                {
                    idItem: payload,
                    quantidade: 1,
                }
            ];
            return state.filter(item => item.idItem !== payload)
        },
        mudarQuantidade: (state, {payload}) => {
            state.map(itemNoCarrinho => {
                if (itemNoCarrinho.idItem === payload.id) itemNoCarrinho.quantidade += payload.quantidade
                return itemNoCarrinho;
            })
        }
    }
})

export const {mudarCarrinho, mudarQuantidade} = carrinhoSlice.actions;

export default carrinhoSlice.reducer;