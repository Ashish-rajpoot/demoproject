import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserContext } from "@/useContext/Context";

const PopOverPage = () => {
  const user = useUserContext();
  return (
    <div className="flex justify-center items-center">
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>{`Data is populating by the useContext hook form HomePage : ${user.name}`}</PopoverContent>
      </Popover>
    </div>
  );
};

export default PopOverPage;
