import styles from './Carrinho.module.scss';
import Header from "../../components/Header/Header";
import {useAppSelector} from "../../store/hooks";
import Item from "../../components/Item/Item";
import IItem from "../../store/reducers/interfaces/IItem";
import {useDispatch} from "react-redux";
import {resetarCarrinho} from "../../store/reducers/carrinho";
import Button from "../../components/Button/Button";

export default function Carrinho() {
    const dispatch = useDispatch();

    const {itens, total} = useAppSelector (state => {
        const itens: IItem[] = [];
        let total = 0;
        const regexp = new RegExp(state.busca, "i");
        state.carrinho.map(itemNoCarrinho => {
            const item = state.itens.find(iten => itemNoCarrinho.idItem === iten.id);
            if(item && item.titulo.match(regexp)) {
                itens.push(item);
                total += (item.preco * itemNoCarrinho.quantidade);
            }
        })
        return { itens , total };
    })

    return (
        <div>
            <Header
                titulo="Carrinho de Compras"
                descricao="Confira os produtos do carrinho"
            />
            <div className={styles.carrinho}>
                {itens.map(item => (<Item key={item.id} {...item} carrinho/>))}
                <div className={styles.total}>
                    <strong>
                        Resumo da Compra
                    </strong>
                    <span>
                        Subtotal: <strong> R$ {total.toFixed(2)}</strong>
                    </span>
                </div>
                <Button
                    onClick={() => dispatch(resetarCarrinho())}
                    children={"Finalizar compra"}
                 />

            </div>
        </div>
    )
}