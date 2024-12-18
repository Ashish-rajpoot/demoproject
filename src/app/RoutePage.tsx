import Index from "@/Pages/Index";
import { Route, Routes } from "react-router-dom";
import CalenderPage from "./CalenderPage";
import ChartPage from "./ChartPage";
import { DataTableDemo } from "./DataTablePage";
import PopOverPage from "./PopOverPage";
const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/popover" element={<PopOverPage />} />
        <Route path="/chartpage" element={<ChartPage />} />
        <Route path="/calender" element={<CalenderPage />} />
        <Route path="/datatable" element={<DataTableDemo />} />
      </Routes>
    </div>
  );
};

export default RoutePage;
