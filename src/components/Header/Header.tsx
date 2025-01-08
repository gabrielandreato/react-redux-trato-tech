import styles from './Header.module.scss';
import {IHomeProps} from "./IHomeProps";


export default function Header({titulo, descricao, imagem, className = ''}: IHomeProps) {
    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles['header-texto']}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles['header-imagem']}>
                <img
                    alt={titulo}
                    src={imagem}
                />
            </div>
        </header>
    )
}