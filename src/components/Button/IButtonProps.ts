
export interface IButtonProps {
    children: string;
    type?: "submit" | "reset" | "button" | undefined
    onClick: () => void;
}