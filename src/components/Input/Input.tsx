import {IInputProps} from "./IInputProps";
import styles from './Input.module.scss';
import {ForwardedRef, forwardRef} from "react";


function Input({value, onChange, placeholder, alt, type, className}: IInputProps, ref: ForwardedRef<HTMLInputElement>) {
    return (
        <input
            value={value}
            onChange={onChange}
            className={className ?? styles.input}
            placeholder={placeholder}
            alt={alt}
            type={type}
        />
    )
}

export default forwardRef(Input);