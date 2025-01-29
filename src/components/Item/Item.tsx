import styles from './Item.module.scss';
import {IItemProps} from "./IItemProps";
import {
    AiOutlineHeart,
    AiFillHeart,
    AiOutlineCheck,
    AiFillEdit,
    AiFillCloseCircle
} from 'react-icons/ai'

import {FaCartPlus, FaMinusCircle, FaPlusCircle} from 'react-icons/fa'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {deletarItem, mudarFavorito, mudarItem} from "../../store/reducers/itens";
import {mudarCarrinho, mudarQuantidade} from "../../store/reducers/carrinho";
import classNames from "classnames";
import {ICarrinho} from "../../store/reducers/interfaces/ICarrinho";
import {memo, useState} from "react";
import Input from "../Input/Input";

const iconeProps = {
    size: 24,
    color: '#041833'
}

const quantidadeProps = {
    size: 24,
    color: '#1875E8'
}

 function Item({id, foto, preco, titulo, favorito, descricao, carrinho}: IItemProps) {
    const [modoEdicao, setModoEdicao] = useState<boolean>(false);
    const [novoTitulo, setNovoTitulo] = useState<string>(titulo);

    const dispatch = useAppDispatch();

    const resolverFavorito = () => {
        dispatch(mudarFavorito(id));
    }

    const resolverCarrinho = () => {
        dispatch(mudarCarrinho(id));
    }

    const itemNoCarrinho: ICarrinho | undefined =
        useAppSelector(state =>
            state.carrinho.find(item => item.idItem === id)
        );

    const componenteModoEdicao = <>
        {modoEdicao
            ? <AiOutlineCheck
                {...iconeProps}
                className={styles['item-acao']}
                onClick={() => {
                    setModoEdicao(false)
                    dispatch(mudarItem({
                        id,
                        item: {titulo: novoTitulo}
                    }))
                }}
            />
            : <AiFillEdit
                {...iconeProps}
                className={styles['item-acao']}
                onClick={() => setModoEdicao(true)}
            />
        }
    </>

    return (
        <div className={classNames(styles.item, {
            [styles.itemNoCarrinho]: carrinho
        })}>
            <AiFillCloseCircle
                {...iconeProps}
                className={`${styles['item-acao']} ${styles['item-deletar']}`}
                onClick={() => dispatch(deletarItem(id))}
            />
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo}/>
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    {modoEdicao
                        ? <Input
                            value={novoTitulo}
                            onChange={e => setNovoTitulo(e.target.value)}
                        />
                        : <h2>{titulo}</h2>
                    }
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
                        {
                            carrinho
                                ? (
                                    <div className={styles.quantidade}>
                                        <FaMinusCircle
                                            {...quantidadeProps}
                                            onClick={() => {
                                                if (itemNoCarrinho && itemNoCarrinho.quantidade !== 0)
                                                    dispatch(mudarQuantidade({id, quantidade: -1}))
                                            }}
                                        />
                                        <span>{String(itemNoCarrinho?.quantidade || 0).padStart(2, '0')}</span>
                                        <FaPlusCircle
                                            {...quantidadeProps}
                                            onClick={() => dispatch(mudarQuantidade({id, quantidade: 1}))}
                                        />
                                    </div>
                                )
                                : (
                                    <>
                                        <FaCartPlus
                                            onClick={resolverCarrinho}
                                            {...iconeProps}
                                            color={itemNoCarrinho ? '#1875E8' : iconeProps.color}

                                        />
                                        {componenteModoEdicao}
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default memo(Item);