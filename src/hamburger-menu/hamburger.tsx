import React, { useState, useEffect } from "react";
import { SubMenu } from "./submenu";
import { Menu } from "./menu";
import { generateKeyFromURL } from "../utils/utils";
const Hamburger = (props) => {
  const [state, setState] = useState({ menuOpen: false, submenuKey: null });
  const onMenuOpen = (menuItem) => {
    if (menuItem.childs) {
      setState({
        ...state,
        submenuKey: generateKeyFromURL("catalog/feature/" + menuItem.key)
      });
      props.fetchSubmenuList(menuItem);
    }
  };
  useEffect(() => {
    console.log(state.submenuKey);
    if (state.submenuKey) {
      setState({
        ...state,
        menuOpen:
          props.selectedMenuItems[state.submenuKey]?.length ||
          props.selectedMenuItems[state.submenuKey]?.primaries?.length
      });
    }
  }, [props]);

  const hideMenu = () => {
    setState({ ...state, menuOpen: false });
  };
  return (
    <>
      {!state.menuOpen && (
        <Menu menuList={props.menuList} onMenuOpen={onMenuOpen} />
      )}
      {state.menuOpen && (
        <div className="mobileMenu">
          <div onClick={hideMenu} className="menuBreadcrumb">
            {"< " + "Back to Main Menu"}
          </div>
          {Array.isArray(props.selectedMenuItems[state.submenuKey]) &&
            props.selectedMenuItems[state.submenuKey]?.map((menuItem) => (
              <SubMenu
                submenuItem={menuItem}
                onMenuOpen={onMenuOpen}
                key={menuItem.id}
              ></SubMenu>
            ))}
          {props.selectedMenuItems[state.submenuKey] &&
            !Array.isArray(props.selectedMenuItems[state.submenuKey]) &&
            props.selectedMenuItems[
              state.submenuKey
            ]?.primaries.map((menuItem) => (
              <SubMenu
                submenuItem={menuItem}
                onMenuOpen={onMenuOpen}
                key={menuItem.id}
              ></SubMenu>
            ))}
        </div>
      )}
    </>
  );
};
export default Hamburger;
