import { useEffect, useState } from "react";
import NavbarS from "./NavbarS";
import StateCards from "./StateCards";
import TableArea from "./TableArea/TableArea";
import { SalesFormDialog } from "./salesForm/SalesFormDialog";

export const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-4 relative overflow-hidden">
      <div className="border-2 rounded-2xl ">
        <NavbarS setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <StateCards />
        <TableArea searchQuery={searchQuery} />
      </div>
    </div>
  );
};
