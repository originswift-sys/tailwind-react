import { ButtonHTMLAttributes } from "react";
import "./button.css";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary";
}
export declare const Button: ({ size, variant, children, disabled, ...props }: ButtonProps) => JSX.Element;
