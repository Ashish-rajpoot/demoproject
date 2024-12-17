import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopOverPage = () => {
  return (
    <div className="flex justify-center items-center">
      <Popover>
        <Button>
          <PopoverTrigger>Open</PopoverTrigger>
        </Button>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
};

export default PopOverPage;
