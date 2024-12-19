import { createContext, useContext, ReactNode, useState } from "react";

// Define the shape of the context
interface Page {
  page: number;       // Current page number
  itemsPerPage: number;  // Items per page (e.g., 5, 10, 20)
}
interface SelectorContextType extends Page {
  updatePage: (page: number) => void;
  updateItemsPerPage: (itemsPerPage: number) => void;
}

// Create the context
export const SelectorContext = createContext<SelectorContextType | undefined>(undefined);

// Custom hook to access context
export const useSelectorContext = () => {
  const context = useContext(SelectorContext);
  if (context === undefined) {
    throw new Error("No page selected...");
  }
  return context;
};

// Context Provider component
export const SelectorProvider = ({ children }: { children: ReactNode }) => {
  const [selectedValue, setSelectedValue] = useState<Page>({
    page: 1,        
    itemsPerPage: 10, 
  });

  const updatePage = (page: number) => {
    setSelectedValue((prev) => ({ ...prev, page }));
  };

  const updateItemsPerPage = (itemsPerPage: number) => {
    setSelectedValue((prev) => ({ ...prev, itemsPerPage }));
  };

  return (   

    <SelectorContext.Provider value={{
        page: selectedValue.page,
        itemsPerPage: selectedValue.itemsPerPage,
        updatePage,
        updateItemsPerPage,
      }}
    >
      {children}
    </SelectorContext.Provider>
  );
};
