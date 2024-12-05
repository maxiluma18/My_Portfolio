// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const ThemePovider = createContext();
export const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <ThemePovider.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemePovider.Provider>
    )
}