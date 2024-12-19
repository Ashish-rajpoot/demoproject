import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useContext } from "react";
import { SelectorContext } from "../SalesContext/SalesContext";

// Function to handle change in the selected items per page
export function SelectScrollable() {
  const context = useContext(SelectorContext); // Access the context

  if (!context) {
    throw new Error("useSelectorContext must be used within a SelectorProvider");
  }

  // Destructure the necessary values from the context
  const { itemsPerPage, updateItemsPerPage } = context;

  const handleValueChange = (value: string) => {
    updateItemsPerPage(parseInt(value)); // Update items per page when selection changes
  };

  return (
    <Select onValueChange={handleValueChange} value={itemsPerPage.toString()}>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="items per page" />
      </SelectTrigger>
      <SelectContent>
        {[5, 10, 15, 20, 30, 40].map((item, i) => (
          <SelectItem value={item.toString()} key={i}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
