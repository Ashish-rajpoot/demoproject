import NavPage from "./NavPage";
import RoutePage from "./RoutePage";

const HomePage = () => {
  return (
    <div className="relative">
      <div>
        <NavPage />
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        <RoutePage />
      </div>
    </div>
  );
};

export default HomePage;
