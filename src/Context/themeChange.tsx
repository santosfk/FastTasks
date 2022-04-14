import React, { SetStateAction } from "react";
import { createContext, useState } from "react";

interface ThemeChangeProps {
  changeTheme: boolean;
  setChangeTheme: Function;
}

export const ThemeChange = createContext<ThemeChangeProps>(
  {} as ThemeChangeProps
);

export default function ThemeChangeContext({ children }) {
  const [changeTheme, setChangeTheme] = useState<boolean>(true);
  return (
    <ThemeChange.Provider value={{ changeTheme, setChangeTheme }}>
      {children}
    </ThemeChange.Provider>
  );
}
