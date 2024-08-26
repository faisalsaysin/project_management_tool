//Local
import { ButtonProps } from "./IButton";

const Button = ({
    icon,
    className,
    label,
    type,
    ...restProps
}: ButtonProps) => {
    return (
        <button
            type={type || "button"}
            className={`"px-3 py-2 outline-none" ${className}`}
            {...restProps}
        >
            {label && <span>{label}</span>}
            {icon && icon}
        </button>
    );
};

export default Button;
