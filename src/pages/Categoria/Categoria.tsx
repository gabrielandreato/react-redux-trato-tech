import Header from "../../components/Header/Header";
import {useAppSelector} from "../../store/hooks";
import {useParams} from "react-router-dom";
import styles from './Categoria.module.scss';
import Item from "../../components/Item/Item";

export default function Categoria() {
    const {nomeCategoria} = useParams();
    const {categoria, itens} = useAppSelector(state => {
        const regexp = new RegExp(state.busca, "i");
        return {
        categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
        itens: state.itens.filter(item => item.categoria !== nomeCategoria && item.titulo.match(regexp)&& item.titulo.match(regexp)),
        }
    });

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