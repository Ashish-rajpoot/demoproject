import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar";
import { MenubarPageProps } from "@/interface/MenubarPageProps.interface";
import { Link } from "react-router-dom";

const MenubarPage: React.FC<MenubarPageProps> = ({ Item }) => {
  console.log(Item);
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">{Item.title}</MenubarTrigger>
        <MenubarContent>
          {/* <MenubarItem>
            <Link to={"/"}>
              {Item.subLinks?.title} <MenubarShortcut>⌘T</MenubarShortcut>
            </Link>
          </MenubarItem> */}
          {Item.subLinks?.links?.map((link, i) => (
            <div key={i}>
              <Link to={`/${link.url}`}>
              <MenubarItem>{link.title}</MenubarItem>
              </Link>
              {/* <MenubarSeparator /> */}
            </div>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarPage;
