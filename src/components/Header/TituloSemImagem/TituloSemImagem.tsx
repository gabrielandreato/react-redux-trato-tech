import {IHeaderProps} from "../IHeaderProps";
import styles from './TituloSemImagem.module.scss';


export default function TituloSemImagem({titulo, descricao, children}: IHeaderProps) {
   return (
       <div className={styles.container}>
           <div className={styles.titulo}>
               <h1 className={styles.titulo}>
                   {titulo}
               </h1>
               <h2 className={styles.descricao}>
                   {descricao}
               </h2>
               {children}
           </div>
       </div>
   )
}