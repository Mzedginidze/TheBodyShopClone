import { createContext, useState } from "react";

const EditingProduct = createContext();

const EditingProductProvider = ({ children }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <EditingProduct.Provider value={{ editingProduct, setEditingProduct }}>
      {children}
    </EditingProduct.Provider>
  );
};
export { EditingProduct, EditingProductProvider };
