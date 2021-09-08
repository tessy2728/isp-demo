import React, { useState, useEffect } from "react";
import MainMenu from "./mainMenu";
import NestedMenuItem from "./nestedMenuItem";
import { IMegaMenu } from "../interfaces/IMenu";

export function MegaMenu(props: IMegaMenu) {
  // we will use async/await to fetch this data

  return (
    <ul className="navbar">
      {props.menuList?.map((menuItem, index) => (
        <MainMenu menuItem={menuItem} key={`mainmenu${menuItem.key}`}>
          {menuItem.primaries &&
            menuItem.primaries.map((submenuItem, menuItemindex) => (
              <NestedMenuItem
                submenuItem={submenuItem}
                parentUrl={menuItem.url}
                fetchSubmenuList={props.fetchSubmenuList}
                selectedMenuItems={props.selectedMenuItems}
                key={`mainmenu${menuItem.key}-${submenuItem.key}`}
              />
            ))}
          {menuItem.childs && <div className="dummytext">Dummy content</div>}
        </MainMenu>
      ))}
    </ul>
  );
}

export default MegaMenu;
