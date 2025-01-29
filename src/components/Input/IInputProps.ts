import {ChangeEventHandler} from "react";

export interface IInputProps {
    value?: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    placeholder?: string,
    alt?: string,
    type?: string,
    className?: string
}