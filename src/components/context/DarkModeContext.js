import React, { createContext, useState, useContext, useEffect } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [icon, setIcon] = useState(<BsFillSunFill />);

  useEffect(() => {
    setIcon(darkMode ? <BsFillSunFill color="white" /> : <BsFillMoonStarsFill />);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, icon, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);

export const toggleDarkMode = () => { };
