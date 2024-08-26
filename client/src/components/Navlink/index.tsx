//Libs
import { Link } from "react-router-dom";

//Local
import { NavlinkProps } from "./INavlink";

const Navlink = ({
    id,
    label,
    link,
    icon,
    onClick,
    className,
}: NavlinkProps) => {
    return (
        <Link
            id={id}
            to={link}
            onClick={onClick}
            className={`w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d] ${className}`}
            key={id}
        >
            {icon}
            <span className="hover:text-[#2564ed]">{label}</span>
        </Link>
    );
};

export default Navlink;
