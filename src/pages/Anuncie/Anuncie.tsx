import styles from './Anuncie.module.scss';
import Header from "../../components/Header/Header";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import Button from "../../components/Button/Button";
import {useForm} from 'react-hook-form';
import {cadastrarItem} from "../../store/reducers/itens";

export default function Anuncie() {
    const categorias = useAppSelector(state => state.categorias);

    const {register, handleSubmit, formState} = useForm();

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
                <input className={errors.nome ? styles['input-erro'] : ''}
                       {...register('nome', {required: 'O campo nome é obrigatório'})}
                       placeholder={"Nome do Produto"} alt={"nome do produto"}
                />
                {errors.nome && <span className={styles['mensagem-erro']}> {errors.nome.message?.toString()} </span>}

                <input className={errors.descricao ? styles['input-erro'] : ''}
                       {...register('descricao', {required: 'O campo nome é obrigatório'})}
                       placeholder={"Descricao do Produto"} alt={"descricao do produto"}
                />
                {errors.descricao && <span className={styles['mensagem-erro']}> {errors.descricao.message?.toString()} </span>}

                <input className={errors.imagem ? styles['input-erro'] : ''}
                       {...register('imagem', {required: 'O campo nome é obrigatório'})}
                       placeholder={"URL da imagem do produto"} alt={"URL da imagem do produto"}
                />
                {errors.imagem && <span className={styles['mensagem-erro']}> {errors.imagem.message?.toString()} </span>}


                <select
                    className={errors.categoria ? styles['input-erro'] : ''}
                    {...register('categoria', {required: 'O campo nome é obrigatório'})}
                >
                    <option value='' disabled selected>Selecione a categoria...</option>
                    {categorias.map((categoria) => (
                        <option value={categoria.id} key={categoria.id}>{categoria.nome}</option>
                    ))}
                </select>
                {errors.categoria && <span className={styles['mensagem-erro']}> {errors.categoria.message?.toString()} </span>}

                <input className={errors.preco ? styles['input-erro'] : ''}
                       {...register('preco', {required: 'O campo nome é obrigatório'})}
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