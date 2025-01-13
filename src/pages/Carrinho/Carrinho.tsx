import styles from './Carrinho.module.scss';
import Header from "../../components/Header/Header";
import {useAppSelector} from "../../store/hooks";
import Item from "../../components/Item/Item";

export default function Carrinho() {
    const itens = useAppSelector (state => {
        return state.itens
            .filter(item => state.carrinho.map(x => x.idItem).includes(item.id));
    })
    console.log(itens);

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
                        Subtotal: <strong> R$ {0.0.toFixed(2)}</strong>
                    </span>
                </div>
            </div>
        </div>
    )
}