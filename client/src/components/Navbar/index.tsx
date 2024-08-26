//Lib
import React from "react";
import { MdOutlineSearch, MdMenu } from "react-icons/md";

//Local
// import UserAvatar from "./UserAvatar";
// import NotificationPanel from "./NotificationPanel";
import { INavbarProps } from "./INavbar";
import Button from "../Button";

const Navbar = React.memo(({ toggleSidebar }: INavbarProps) => {
    return (
        <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0">
            <div className="flex gap-4">
                <Button
                    className="text-2xl text-gray-500 block md:hidden"
                    icon={<MdMenu />}
                    onClick={toggleSidebar}
                />
                <div className="w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]">
                    <MdOutlineSearch className="text-gray-500 text-xl" />

                    <input
                        type="text"
                        placeholder="Search...."
                        className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
                    />
                </div>
            </div>

            <div className="flex gap-2 items-center">
                {/* <NotificationPanel />

        <UserAvatar /> */}
            </div>
        </div>
    );
});

export default Navbar;
