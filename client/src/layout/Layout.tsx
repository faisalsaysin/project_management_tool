//Lib
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
    MdDashboard,
    MdOutlinePendingActions,
    MdSettings,
    MdTaskAlt,
} from "react-icons/md";

//Local
import Sidebar from "../components/Sidebar";
import { setOpenSidebar } from "../redux/slices/authSlice";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Layout = () => {
    const { user } = useSelector((state: any) => state.auth);
    const { isSidebarOpen } = useSelector((state: any) => state.auth);
    const location = useLocation();
    const dispatch = useDispatch();

    const links = [
        {
            id: "dashborad",
            label: "Dashboard",
            link: "dashboard",
            icon: <MdDashboard size={25} />,
        },
        {
            id: "tasks",
            label: "Tasks",
            link: "tasks",
            icon: <FaTasks size={25} />,
        },
        {
            id: "completed/completed",
            label: "Completed",
            link: "completed/completed",
            icon: <MdTaskAlt size={25} />,
        },
        {
            id: "in-progress/in progress",
            label: "In Progress",
            link: "in-progress/in progress",
            icon: <MdOutlinePendingActions size={25} />,
        },
        {
            id: "todo/todo",
            label: "To Do",
            link: "todo/todo",
            icon: <MdOutlinePendingActions size={25} />,
        },
        {
            id: "team",
            label: "Team",
            link: "team",
            icon: <FaUsers size={25} />,
            admin: true,
        },
        {
            id: "trash",
            label: "Trash",
            link: "trash",
            icon: <FaTrashAlt size={25} />,
            admin: true,
        },
        {
            id: "setting",
            label: "Setting",
            link: "setting",
            icon: <MdSettings size={25} />,
            admin: true,
            position: "bottom",
        },
    ];
    const path = location.pathname.split("/")[1];
    const sidebarLinks = user?.isAdmin
        ? links
        : links.filter((link) => !link.admin);

    const toggleSidebar = () => {
        console.log("called");
        dispatch(setOpenSidebar(!isSidebarOpen));
    };

    return user ? (
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
                <Sidebar
                    links={sidebarLinks}
                    path={path}
                    toggleSidebar={toggleSidebar}
                />
            </div>

            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-black/40 transition-transform duration-700 z-50 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                onClick={toggleSidebar}
            >
                <div
                    className="bg-white w-full h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="w-full flex justify-end px-5 py-3">
                        <Button
                            className="flex justify-end items-center"
                            icon={<IoClose size={25} onClick={toggleSidebar} />}
                        />
                    </div>
                    <Sidebar
                        links={sidebarLinks}
                        path={path}
                        toggleSidebar={toggleSidebar}
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <Navbar toggleSidebar={toggleSidebar} />

                <div className="p-4 2xl:px-10">
                    <Outlet />
                </div>
            </div>
        </div>
    ) : (
        <Navigate to="/log-in" state={{ from: location }} replace />
    );
};

export default Layout;
