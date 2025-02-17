import styles from './Home.module.scss';
import React, {useCallback, useEffect} from "react";
import Header from "../../components/Header/Header";
import relogio from '../../assets/inicial.png';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import Button from "../../components/Button/Button";
import instance from "../../common/config/api";
import {adicionarCategorias, buscarCategorias} from "../../store/reducers/categorias";
import {adicionarItens} from "../../store/reducers/itens";

export default function Home() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const categorias = useAppSelector(state => state.categorias);



    const buscarItens = async () => {
        const resposta = await instance.get('/itens');
        dispatch(adicionarItens(resposta.data));
    };

    useEffect(() => {
        dispatch(buscarCategorias());
        buscarItens().then();
    }, []);

    return (
        <div>
            <Header
                titulo={'Classificados Tech'}
                descricao={'Compre diversos tipos de produto no melhor site do Brasil!'}
                imagem={relogio}
                className={styles.header}
            >
                <Button onClick={() => navigate('/anuncie')} type={"button"}>
                    Quero anunciar
                </Button>
            </Header>
            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles['categorias-container']}>
                    {categorias.map((categoria, index) => (
                        <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                            <img src={categoria.thumbnail} alt={categoria.nome} />
                            <h1>{categoria.nome}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}