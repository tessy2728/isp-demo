import React, { useState, useEffect } from "react";
import MegaMenu from "./mega-menu/megaMenu";
import MenuIcon from "@material-ui/icons/Menu";
import Hamburger from "./hamburger-menu/hamburger";
const Home = (props) => {
  const [hamburger, sethamburger] = useState(false);
  const [state, setState] = useState({ hamburger: false });
  const onHamburgerOpen = () => {
    setState({ ...state, hamburger: !state.hamburger });
  };
  const [menuList, setMenuList] = useState([]);
  const [openedMenuItems, setOpenedMenuItems] = useState({});

  const fetchSubmenuList = async (menuitem) => {
    const submenuKey = "catalog/feature/" + menuitem.key;
    const response = await fetch(`http://localhost:3456/${submenuKey}`);
    const data = await response.json();
    console.log({ ...setOpenedMenuItems, [submenuKey]: data });
    setOpenedMenuItems({ ...setOpenedMenuItems, [submenuKey]: data });
  };
  // + adding the use
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3456/menuList");
      const data = await response.json();

      // store the data into our books variable
      setMenuList(data);
    }
    getData();
  }, []);

  return (
    <div>
      <MenuIcon className="menuIcon" onClick={() => onHamburgerOpen()} />
      <MegaMenu
        menuList={menuList}
        selectedMenuItems={openedMenuItems}
        fetchSubmenuList={fetchSubmenuList}
      />
      <div className={!state.hamburger ? "menuOpen" : "showHamburgermenu"}>
        <Hamburger
          menuList={menuList}
          fetchSubmenuList={fetchSubmenuList}
          selectedMenuItems={openedMenuItems}
        />
      </div>
    </div>
  );
};

export default Home;
