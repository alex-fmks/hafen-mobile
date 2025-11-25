import React, { createContext, useState } from "react";

interface HeaderContextProps {
  title: string;
  setTitle: (value: string) => void;
}

export const HeaderContext = createContext<HeaderContextProps>({
  title: "",
  setTitle: () => {},
});

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState("");

  return (
    <HeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderContext.Provider>
  );
};
