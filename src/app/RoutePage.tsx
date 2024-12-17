import Index from "@/Pages/Index";
import { Route, Routes } from "react-router-dom";
import PopOverPage from "./PopOverPage";
import ChartPage from "./ChartPage";
import CalenderPage from "./CalenderPage";
const RoutePage = () => {
  return (
    <div>
      <Routes>
          <Route path="demoproject/" element={<Index />}></Route>
          <Route path="demoproject/popover" element={<PopOverPage />}></Route>
          <Route path="demoproject/chartpage" element={<ChartPage />}></Route>
          <Route path="demoproject/calender" element={<CalenderPage />}></Route>
      </Routes>
    </div>
  );
};

export default RoutePage;
