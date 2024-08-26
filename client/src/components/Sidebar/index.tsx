//Lib
import React from "react";
import { MdOutlineAddTask } from "react-icons/md";

//Local
import Navlink from "../Navlink";
import { SidebarProps } from "./ISidebar";

const Sidebar = React.memo(({ links, toggleSidebar, path }: SidebarProps) => {
    return (
        <div className="w-full sticky h-full flex flex-col gap-6 p-5">
            <h1 className="flex gap-1 items-center">
                <p className="bg-blue-600 p-2 rounded-full">
                    <MdOutlineAddTask className="text-white text-2xl font-black" />
                </p>
                <span className="text-2xl font-bold text-black">Task Me</span>
            </h1>
            <div className="flex-1 flex flex-col gap-y-5 py-8">
                {links.map((navlink) => (
                    <Navlink
                        {...navlink}
                        className={` ${
                            navlink.position === "bottom"
                                ? "flex-1 items-end"
                                : ""
                        }
                            ${
                                path === navlink.link.split("/")[0]
                                    ? "bg-blue-700 text-neutral-100"
                                    : ""
                            }
                        `}
                        onClick={toggleSidebar}
                        key={navlink.id}
                    />
                ))}
            </div>
        </div>
    );
});

export default Sidebar;
