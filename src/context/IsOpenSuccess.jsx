import { createContext, useState } from "react";

const IsOpenSuccess = createContext();

const IsOpenSuccessProvider = ({ children }) => {
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <IsOpenSuccess.Provider
      value={{ isOpenSuccess, setIsOpenSuccess, selectedItem, setSelectedItem }}
    >
      {children}
    </IsOpenSuccess.Provider>
  );
};

export { IsOpenSuccess, IsOpenSuccessProvider };
