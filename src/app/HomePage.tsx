import { useState } from "react";
import NavPage from "./NavPage";
import RoutePage from "./RoutePage";
import { HomeContext } from "@/useContext/Context";
import { User } from "@/interface/User.interface";


interface DemoProps {}
const HomePage = ({}: DemoProps) => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "Message form HomePage!!!",
  });

  return (
    <HomeContext.Provider value={user}>
      <div className="relative">
        <div>
          <NavPage />
        </div>
        <div className="flex justify-center items-center h-[80vh]">
          <RoutePage />
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default HomePage;
