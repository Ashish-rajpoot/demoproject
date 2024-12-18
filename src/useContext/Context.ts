import { User } from "@/interface/User.interface";
import { createContext, useContext } from "react";
export const HomeContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(HomeContext);

  if (user === undefined) {
    throw new Error("useUserContext my be passed form the parent component");
  }
  return user;
};
