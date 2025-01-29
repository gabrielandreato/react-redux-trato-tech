import styles from './Anuncie.module.scss';
import Header from "../../components/Header/Header";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import Button from "../../components/Button/Button";
import {useForm} from 'react-hook-form';
import {cadastrarItem} from "../../store/reducers/itens";
import {useParams} from "react-router-dom";
import Input from "../../components/Input/Input";

export default function Anuncie() {
    const categorias = useAppSelector(state => state.categorias);
    const {nomeCategoria = undefined} = useParams();

    const {register, handleSubmit, formState} = useForm({
        defaultValues: {
            titulo: undefined,
            categoria: nomeCategoria,
            descricao: undefined,
            foto: undefined,
            preco: undefined
        }
    });

    const {errors} = formState;

    const dispatch = useAppDispatch();

    function cadastrar(parametro: any) {
        dispatch(cadastrarItem(parametro));
    }

    return (
        <div className={styles.container}>
            <Header
                titulo={"Anuncie aqui."}
                descricao={"Anuncie seu produto no melhor site do Brasil."}
            />
            <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
                <Input className={errors.titulo ? styles['input-erro'] : ''}
                       {...register('titulo', {required: 'O campo nome é obrigatório'})}
                       placeholder={"Nome do Produto"} alt={"nome do produto"}
                />
                {errors.titulo && <span className={styles['mensagem-erro']}> {errors.titulo.message?.toString()} </span>}

                <Input className={errors.descricao ? styles['input-erro'] : ''}
                       {...register('descricao', {required: 'O campo nome é obrigatório'})}
                       placeholder={"Descricao do Produto"} alt={"descricao do produto"}
                />
                {errors.descricao && <span className={styles['mensagem-erro']}> {errors.descricao.message?.toString()} </span>}

                <Input className={errors.foto ? styles['input-erro'] : ''}
                       {...register('foto', {required: 'O campo nome é obrigatório'})}
                       placeholder={"URL da imagem do produto"} alt={"URL da imagem do produto"}
                />
                {errors.foto && <span className={styles['mensagem-erro']}> {errors.foto.message?.toString()} </span>}


                <select
                    className={errors.categoria ? styles['input-erro'] : ''}
                    {...register('categoria', {required: 'O campo nome é obrigatório'})}
                    disabled={nomeCategoria !== undefined}
                >
                    <option value='' disabled selected>Selecione a categoria...</option>
                    {categorias.map((categoria) => (
                        <option value={categoria.id} key={categoria.id}>{categoria.nome}</option>
                    ))}
                </select>
                {errors.categoria && <span className={styles['mensagem-erro']}> {errors.categoria.message?.toString()} </span>}

                <Input className={errors.preco ? styles['input-erro'] : ''}
                       {...register('preco', {required: 'O campo nome é obrigatório', valueAsNumber: true})}
                       type={"number"}
                       placeholder={"Preço do produto"}
                />
                {errors.preco && <span className={styles['mensagem-erro']}> {errors.preco.message?.toString()} </span>}

                <Button onClick={() => {
                }} children={"Cadastrar Produto"} type={"submit"}/>
            </form>
        </div>
    )
}