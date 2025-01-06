import {IItem} from "../../models/IItem";
import styles from './Item.module.scss';
import {
    AiOutlineHeart,
    AiFillHeart
} from "react-icons/ai";
import {FaCartPlus} from "react-icons/fa";

export function Item(props: IItem) {
    const iconeProps = {
        size: 24,
        color: "#"
    };
    return (
        <div key={props.id} className={styles.item}>
            <div className={styles['item-imagem']}>
                <img src={props.foto} alt={props.titulo}/>
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{props.titulo}</h2>
                    <span>{props.descricao}</span>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {props.preco.toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {props.favorito
                            ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']}/>
                            : <AiOutlineHeart {...iconeProps} className={styles['item-acao']}/>
                        }
                        <FaCartPlus
                            {...iconeProps}
                            color={false ? '#1875E8' : iconeProps.color}
                            className={styles['item-acao']}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}