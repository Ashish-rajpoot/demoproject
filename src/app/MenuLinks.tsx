import { Item } from "@/utils/Constants";
import MenubarPage from "./MenubarPage";

const MenuLinks = () => {
  return (
    <div className="flex gap-2">
      {Item.map((item, i) => (
        <MenubarPage Item={item} key={i} />
      ))}
    </div>
  );
};

export default MenuLinks;
