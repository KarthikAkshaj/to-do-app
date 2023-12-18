import React, { createContext, useState, useContext } from "react";
import themes from "./themes";

const GlobalContext = createContext();
const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];

    const setGlobalState = (newThemeIndex) => {
        setSelectedTheme(newThemeIndex);
    };

    return (
        <GlobalContext.Provider value={theme}>
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


