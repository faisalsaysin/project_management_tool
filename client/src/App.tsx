// Libs
import { Navigate, Route, Routes } from "react-router-dom";

// Ext Libs
// import { Toaster } from "sonner";

// Local
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TaskDetails from "./pages/TaskDetails";
import Tasks from "./pages/Tasks";
import Trash from "./pages/Trash";
import Users from "./pages/Users";

function App() {
    return (
        <main className="w-full, min-h-screen bg-[#f3f4f6]">
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/tasks" element={<Tasks />} />
                    {/* Imporvement */}
                    {/* <Route path='/tasks/:status' element={<Tasks />} /> */}
                    <Route path="/completed/:status" element={<Tasks />} />
                    <Route path="/in-progress/:status" element={<Tasks />} />
                    <Route path="/todo/:status" element={<Tasks />} />
                    <Route path="/team" element={<Users />} />
                    <Route path="/trash" element={<Trash />} />
                    <Route path="/task/:id" element={<TaskDetails />} />
                </Route>
                <Route path="/log-in" element={<Login />} />
            </Routes>
            {/* <Toaster richColors /> */}
        </main>
    );
}

export default App;
