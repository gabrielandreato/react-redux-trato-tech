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
        }
    }
})

export const {mudarCarrinho} = carrinhoSlice.actions;

export default carrinhoSlice.reducer;