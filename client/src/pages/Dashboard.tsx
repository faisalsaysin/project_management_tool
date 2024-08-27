//Libs
import {
    MdAdminPanelSettings,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { FaNewspaper } from "react-icons/fa";
import { FaArrowsToDot } from "react-icons/fa6";
import moment from "moment";

//Local
import { summary } from "../assets/data";
import Card from "../components/Card";
import Table from "../components/Table";
import { ColumnDataProps, Priority, Stage } from "../components/Table/ITable";
import { BGS, PRIORITY_DOTS, TASK_TYPE } from "../constants";
import { getInitials } from "../utils";

const Dashboard = () => {
    const totals = summary.tasks;

    const ICONS = {
        high: <MdKeyboardDoubleArrowUp />,
        medium: <MdKeyboardArrowUp />,
        low: <MdKeyboardArrowDown />,
    };

    const taskColumnData: Array<ColumnDataProps> = [
        {
            id: "title",
            name: "title",
            title: "Task Title",
            renderer: (row, column) => {
                const key: Stage = row.stage;
                return (
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-4 h-4 rounded-full ${TASK_TYPE[key]}`}
                        />

                        <p className="text-base text-black">
                            {row[column.name]}
                        </p>
                    </div>
                );
            },
        },
        {
            id: "priority",
            name: "priority",
            title: "Priority",
            renderer: (row, column) => {
                const key: Priority = row[column.name];
                return (
                    <div className="flex items-center gap-1">
                        <span className={`text-lg ${PRIORITY_DOTS[key] || ""}`}>
                            {ICONS[key]}
                        </span>
                        <span className="capitalize">{row[column.name]}</span>
                    </div>
                );
            },
        },
        {
            id: "team",
            name: "team",
            title: "Team",
            renderer: (row, column) => {
                return (
                    <div className="flex">
                        {row &&
                            column &&
                            row[column.name].map(
                                (member: any, index: number) => (
                                    <span
                                        key={index}
                                        className={`w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1 ${
                                            BGS[index % BGS.length]
                                        }`}
                                    >
                                        {getInitials(member.name)}
                                    </span>
                                )
                            )}
                    </div>
                );
            },
        },
        {
            id: "createdAt",
            name: "createdAt",
            title: "Created At",
            renderer: (row, column) => {
                return (
                    <span className="text-base text-gray-600">
                        {moment(row[column.name]).fromNow()}
                    </span>
                );
            },

            style: "hidden md:block",
        },
    ];

    const userColumnData: Array<ColumnDataProps> = [
        {
            id: "name",
            name: "name",
            title: "Full Name",
            renderer: (row, column) => {
                return (
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-violet-700">
                            <span className="text-center">
                                {getInitials(row[column.name])}
                            </span>
                        </div>

                        <div>
                            <p> {row[column.name]}</p>
                            <span className="text-xs text-black">
                                {row?.role}
                            </span>
                        </div>
                    </div>
                );
            },
        },
        {
            id: "status",
            name: "isActive",
            title: "Status",
            renderer: (row, column) => {
                return (
                    <p
                        className={`w-fit px-3 py-1 rounded-full text-sm ${
                            row[column.name] ? "bg-blue-200" : "bg-yellow-100"
                        }`}
                    >
                        {row[column.name] ? "Active" : "Disabled"}
                    </p>
                );
            },
        },
        {
            id: "createdAt",
            name: "createdAt",
            title: "Created At",
            renderer: (row, column) => {
                return moment(row[column.name]).fromNow();
            },
        },
    ];

    const stats = [
        {
            _id: "1",
            label: "TOTAL TASK",
            total: summary?.totalTasks || 0,
            icon: <FaNewspaper />,
            bg: "bg-[#1d4ed8]",
        },
        {
            _id: "2",
            label: "COMPLTED TASK",
            total: totals["completed"] || 0,
            icon: <MdAdminPanelSettings />,
            bg: "bg-[#0f766e]",
        },
        {
            _id: "3",
            label: "TASK IN PROGRESS ",
            total: totals["in progress"] || 0,
            icon: <LuClipboardEdit />,
            bg: "bg-[#f59e0b]",
        },
        {
            _id: "4",
            label: "TODOS",
            total: totals["todo"],
            icon: <FaArrowsToDot />,
            bg: "bg-[#be185d]" || 0,
        },
    ];

    return (
        <div className="h-full py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {stats.map(({ icon, bg, label, total }, index) => (
                    <Card
                        key={index}
                        icon={icon}
                        bg={bg}
                        label={label}
                        count={total}
                    />
                ))}
            </div>

            {/* <div className='w-full bg-white my-16 p-4 rounded shadow-sm'>
        <h4 className='text-xl text-gray-600 font-semibold'>
          Chart by Priority
        </h4>
        <Chart />
      </div> */}

            <div className="w-full flex flex-col md:flex-row gap-4 2xl:gap-10 py-8">
                <Table
                    rowData={summary.last10Task}
                    columnData={taskColumnData}
                />

                <Table rowData={summary.users} columnData={userColumnData} />
            </div>
        </div>
    );
};

export default Dashboard;
