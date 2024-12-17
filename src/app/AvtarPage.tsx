import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvtarPage = () => {
  return (
    <div className="avtar cursor-pointer">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvtarPage;
