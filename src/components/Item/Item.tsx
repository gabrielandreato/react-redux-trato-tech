import styles from './Item.module.scss';
import {IItemProps} from "./IItemProps";
import {
    AiOutlineHeart,
    AiFillHeart
} from 'react-icons/ai'

import {FaCartPlus} from 'react-icons/fa'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {mudarFavorito} from "../../store/reducers/itens";
import {mudarCarrinho} from "../../store/reducers/carrinho";
import classNames from "classnames";

const iconeProps = {
    size: 24,
    color: '#041833'
}


export default function Item({id, foto, preco, titulo, favorito, descricao, carrinho}: IItemProps) {
    const dispatch = useAppDispatch();

    const resolverFavorito = () => {
        dispatch(mudarFavorito(id));
    }

    const resolverCarrinho = () => {
        dispatch(mudarCarrinho(id));
    }

    const estaNoCarrinho: boolean = useAppSelector(state => state.carrinho.some(item => item.idItem === id));

    return (
        <div className={classNames(styles.item, {
            [styles.itemNoCarrinho]: carrinho
        })}>
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo}/>
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {preco.toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {favorito
                            ? <AiFillHeart onClick={resolverFavorito} {...iconeProps} color={'#ff0000'}
                                           className={styles['item-acao']}/>
                            :
                            <AiOutlineHeart onClick={resolverFavorito} {...iconeProps} className={styles['item-acao']}/>
                        }
                        <FaCartPlus onClick={resolverCarrinho} {...iconeProps} color={estaNoCarrinho ? '#1875E8' : iconeProps.color}/>
                    </div>
                </div>
            </div>

        </div>
    )
}