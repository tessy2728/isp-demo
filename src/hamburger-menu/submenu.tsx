import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export function SubMenu(props) {
  const isNestedList = () => props.submenuItem.type === "list";
  return (
    <div
      className="menuItems"
      onClick={() => props.onMenuOpen(props.submenuItem)}
    >
      <span>{props.submenuItem.description}</span>
      {isNestedList() && <ChevronRightIcon />}
    </div>
  );
}

export default SubMenu;
