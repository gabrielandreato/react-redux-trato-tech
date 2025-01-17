import styles from './Button.module.scss';
import {IButtonProps} from "./IButtonProps";

export default function Button ({children, type, onClick}: IButtonProps) {
    return (
        <div>
            <button className={styles.finalizar} type={type} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}