import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export function Menu(props) {
  return (
    <div className="mobileMenu mobileMegamenu">
      {props.menuList?.map((menuItem, index) => (
        <>
          <div
            className="menuItems"
            key={menuItem.key}
            onClick={() => props.onMenuOpen(menuItem)}
          >
            {menuItem.childs ? (
              <>
                <span>{menuItem.description}</span>
                <ChevronRightIcon />
              </>
            ) : (
              <span>{menuItem.description}</span>
            )}
          </div>
        </>
      ))}
    </div>
  );
}

export default Menu;
