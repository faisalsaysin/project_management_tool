import { UseFormRegisterReturn } from "react-hook-form";

export interface TextboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    register?: UseFormRegisterReturn<string>
}