import {IItem} from "./IItem";

export interface ICategoria {
    nome: string;
    thumbnail: string,
    header: string;
    id: string;
    descricao: string;
    itens?: IItem[];
}