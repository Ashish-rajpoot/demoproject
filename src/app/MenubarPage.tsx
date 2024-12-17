import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger
} from "@/components/ui/menubar";
import { MenubarPageProps } from "@/interface/MenubarPageProps.interface";

const MenubarPage: React.FC<MenubarPageProps> = ({Item}) => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">{Item.title}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
           {Item.subLinks?.title} <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          {
            Item.subLinks?.links?.map((link,i)=>(
              <div key={i}>
              <MenubarItem>{link}</MenubarItem>
              {/* <MenubarSeparator /> */}
              </div>
            ))
          }
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenubarPage;
