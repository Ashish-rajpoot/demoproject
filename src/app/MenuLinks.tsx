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

// const DirectLinks = () => {
//   return (
//     <div className="flex gap-2">
//       {directLinks.map((item, i) => (
//         <Button>{item.name}</Button>
//       ))}
//     </div>
//   );
// };

export default MenuLinks;
