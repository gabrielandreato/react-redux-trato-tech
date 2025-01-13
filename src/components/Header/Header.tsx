import styles from './Header.module.scss';
import {IHeaderProps} from "./IHeaderProps";
import TituloComImagem from "./TituloComImagem/TituloComImagem";
import TituloSemImagem from "./TituloSemImagem/TituloSemImagem";


export default function Header({titulo, descricao, imagem, className = ''}: IHeaderProps) {
    return (
        <header className={`${styles.header} ${className}`}>
            {titulo && !imagem &&
                <TituloSemImagem
                    titulo={titulo}
                    descricao={descricao}
                />
            }
            {titulo && imagem &&
                <TituloComImagem
                    titulo={titulo}
                    descricao={descricao}
                    imagem={imagem}
                />
            }
        </header>
    )
}