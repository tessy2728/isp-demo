import React from "react";
import {MenuItem} from "@material-ui/core";
import { generateKeyFromURL } from "../utils/utils";
import NestedMenuItem from "./nestedMenuItem";

export function NestedMenu(props) {
  // const { subcategories } = props.submenuItem;
  const subcategories = props.submenuItem?.primaries || [];
  const parentMenuItem = props.submenuItem?.parentMenuItem || {};
  const submenuKey = generateKeyFromURL(props.submenuItem.key);
  return (
    <>
      {props.submenuItem && subcategories.length > 0 && (
        <div
          className={"submenuNavContent"}
          key={`submenu-content-${submenuKey}`}
        >
          <MenuItem
            className="listHeading"
            key={`nested-submenu-item-${submenuKey}-heading`}
          >
            {parentMenuItem?.description} {`(${subcategories?.length})`}
          </MenuItem>
          {subcategories?.map((subcategoriesitem, index) => (
            <NestedMenuItem
              submenuItem={subcategoriesitem}
              fetchSubmenuList={props.fetchSubmenuList}
              parentKey={submenuKey}
              selectedMenuItems={props.selectedMenuItems}
              key={`nested-submenu-item-${submenuKey}-${subcategoriesitem.key}-item`}
            ></NestedMenuItem>
          ))}
        </div>
      )}
    </>
  );
}

export default NestedMenu;
