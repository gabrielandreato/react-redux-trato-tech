import Header from "../../components/Header/Header";
import {useAppSelector} from "../../store/hooks";
import {useNavigate, useParams} from "react-router-dom";
import styles from './Categoria.module.scss';
import Item from "../../components/Item/Item";
import Button from "../../components/Button/Button";

export default function Categoria() {
    const {nomeCategoria} = useParams();
    const {categoria, itens} = useAppSelector(state => {
        const regexp = new RegExp(state.busca, "i");
        return {
        categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
        itens: state.itens
            .filter(item =>
                item.categoria === nomeCategoria
                && item.titulo.match(regexp)
            ),
        }
    });
    const navigate = useNavigate();

    console.log(itens);
    return (
        <div>
            <Header
                titulo={categoria!.nome}
                descricao={categoria!.descricao}
                imagem={categoria!.header}
            >
                <Button onClick={() => navigate(`/anuncie/${nomeCategoria}`)} type={"button"} >
                    Quero anunciar
                </Button>
            </Header>
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