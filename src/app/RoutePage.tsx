import Index from "@/Pages/Index";
import { Route, Routes } from "react-router-dom";
const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </div>
  );
};

export default RoutePage;
