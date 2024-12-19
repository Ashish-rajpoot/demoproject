import { User } from "@/interface/User.interface";
import { HomeContext } from "@/useContext/Context";
import { useState } from "react";
import NavPage from "./NavPage";
import RoutePage from "./RoutePage";


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
        <div className="flex justify-center items-center min-h-fit absolute">
          <RoutePage />
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default HomePage;
