import React, { createContext, useState, useContext } from "react";
import themes from "./themes";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";


const GlobalContext = createContext();
const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
    const { user } = useUser();
    const [selectedTheme, setSelectedTheme] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [model, setModel] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [tasks, setTasks] = useState([]);

    const theme = themes[selectedTheme];
    const setGlobalState = (newThemeIndex) => {
        setSelectedTheme(newThemeIndex);
    };

    const allTasks = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/tasks");
            // const sorted = res.data.sort((a, b) => {
            //     return (
            //         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            //     );
            // });
            setTasks(res.data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(`/api/tasks/${id}`);
            toast.success("Task Successfully Deleted");

            allTasks();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    React.useEffect(() => {
        if (user) allTasks();
    }, [user]);

    return (
        <GlobalContext.Provider value={
            {
                theme,
                tasks,
                deleteTask,
                isLoading,
            }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => {
    return useContext(GlobalContext);
};

export const useGlobalUpdate = () => {
    return useContext(GlobalUpdateContext);
};


