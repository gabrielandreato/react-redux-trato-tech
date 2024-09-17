import styles from './Header.module.scss';
import {IHeaderProps} from "./interface/IHeaderProps";

export default function Header(params: IHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles['header-texto']}>
                <h1>{params.titulo}</h1>
                <h2>{params.descricao}</h2>
            </div>
            <div className={styles['header-imagem']}>
                <img
                    alt={params.titulo}
                    src={params.imagem}
                />
            </div>
        </header>
    )
}