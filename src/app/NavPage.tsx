import AvtarPage from "./AvtarPage";
import MenuLinks from "./MenuLinks";

const NavPage = () => {
  return (
      <div className="menu-bar justify-between flex bg-gray-100 py-2 items-center px-2 rounded-md">
        <MenuLinks />
        <AvtarPage />
      </div>
  );
};

export default NavPage;
