import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenubarPageProps } from "@/interface/MenubarPageProps.interface";
import { Link } from "react-router-dom";

const MenubarPage: React.FC<MenubarPageProps> = ({ Item }) => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">{Item.title}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link to={"/demoproject/"}>
              {Item.subLinks?.title} <MenubarShortcut>⌘T</MenubarShortcut>
            </Link>
          </MenubarItem>
          {Item.subLinks?.links?.map((link, i) => (
            <div key={i}>
              <Link to={`/demoproject/${link}`}>
              <MenubarItem>{link}</MenubarItem>
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
