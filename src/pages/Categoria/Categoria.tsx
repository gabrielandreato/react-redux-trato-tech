import Header from "../../components/Header/Header";
import {useAppSelector} from "../../store/hooks";
import {useParams} from "react-router-dom";
import styles from './Categoria.module.scss';
import {Item} from "../../components/Item/Item";

export default function Categoria() {

    const {nomeCategoria} = useParams<string>();

    const {categoria, itens} = useAppSelector(state => ({
        categoria: state.categorias.find(i => i.id === nomeCategoria),
        itens: state.itens.filter(i => i.categoria === nomeCategoria)
    }));

    return (
        <div>
            <Header
                titulo={categoria!.nome}
                descricao={categoria!.descricao}
                imagem={categoria!.header}
            />

            <div className={styles.itens}>
                {itens?.map((item) => (
                    <Item {...item} />
                ))}
            </div>
        </div>
    )
}