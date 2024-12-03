import { createContext, useState } from "react";

const IsOpen = createContext();

const IsOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IsOpen.Provider value={{ isOpen, setIsOpen }}>{children}</IsOpen.Provider>
  );
};

export { IsOpen, IsOpenProvider };
