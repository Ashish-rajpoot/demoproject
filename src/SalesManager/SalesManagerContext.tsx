import { createContext, useContext } from "react";

export const createDeleteContext = createContext<[string, (id: string) => void] | undefined>(undefined);


export const useDeleteContext = () => {
  const contextValue = useContext(createDeleteContext);
  if (contextValue === undefined) {
    throw new Error("useDeleteContext must be used within a DeleteProvider");
  }
  return contextValue;
};
