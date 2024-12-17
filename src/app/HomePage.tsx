import AvtarPage from "./AvtarPage";
import CardPage from "./CardPage";
import MenuLinks from "./MenuLinks";
import RoutePage from "./RoutePage";

const HomePage = () => {
  return (
    <div>
      <div className="menu-bar justify-between flex bg-gray-100 py-2 items-center px-2 rounded-md">
        <MenuLinks />
        <AvtarPage />
      </div>
      <RoutePage />
      <div className="breadcrum">Bradcrum</div>
      <div className="grid grid-cols-4 gap-4">
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
        <CardPage />
      </div>
    </div>
  );
};

export default HomePage;
