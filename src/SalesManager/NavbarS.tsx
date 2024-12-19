import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { ModeToggle } from "./darkmode/mode-toggle";
const NavbarS = () => {
  return (
    <div className={`relative w-full h-20 overflow-hidden flex justify-between items-center border-b px-6 rounded-2xl gap-2 shadow-sm`}>
      <header className="flex items-center gap-2 top-8 left-10">
        <div className="size-10 bg-primary rounded-md flex justify-center items-center">
          <FaShoppingBag
            className="text-white text-lg"
            aria-hidden="true"
          ></FaShoppingBag>
        </div>
        <h1 className="font-semibold text-2xl max-md:hidden">
          Sales <span className="font-normal text-primary">Flow</span>
        </h1>
      </header>
      <div className="flex gap-3 items-center">
        <div className="flex relative items-center gap-3  max-sm:w-[250px] rounded-lg">
          <Input type="text" placeholder="search..." className="h-10 rounded-lg  cursor-pointer " />
          <div className="absolute right-[4px] h-[31px]">
            <Button className="h-8 bg-primary">
              <IoIosAdd className="text-3xl" />
            </Button>
          </div>
        </div>
          <ModeToggle/>
      </div>
    </div>
  );
};

export default NavbarS;
