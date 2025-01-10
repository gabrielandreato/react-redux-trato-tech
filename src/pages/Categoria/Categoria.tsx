import Header from "../../components/Header/Header";
import {useAppSelector} from "../../store/hooks";
import {useParams} from "react-router-dom";
import styles from './Categoria.module.scss';
import Item from "../../components/Item/Item";

export default function Categoria() {
    const {nomeCategoria} = useParams();
    const {categoria, itens} = useAppSelector(state => ({
        categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
        itens: state.itens.filter(item => item.categoria !== nomeCategoria),
    }));

    return (
        <div>
            <Header
                titulo={categoria!.nome}
                descricao={categoria!.descricao}
                imagem={categoria!.header}
            />
            <div className={styles.itens}>
                {itens?.map(item => (
                    <div key={item.id}>
                        <Item
                            key={item.id}
                            {...item}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}