import React from "react";
import { MenuItem } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import NestedMenu from "./nestedMenu";
import { generateKeyFromURL, isEmpty } from "../utils/utils";
import { Link } from "@material-ui/core";

export function NestedMenuItem(props) {
  const currentItemUrl = generateKeyFromURL(
    "catalog/feature/" + props.submenuItem.key
  );
  console.log(currentItemUrl);
  const isNestedList = () => {
    let { selectedMenuItems, submenuItem } = props;
    let flag = submenuItem != undefined ? submenuItem.childs : false;
    return flag;
  };
  return (
    <ul key={`menu${props.submenuItem.key}`} className="submenuNav">
      <MenuItem
        key={props.submenuItem.key}
        onMouseOver={() => props.fetchSubmenuList(props.submenuItem)}
      >
        <Link href={props.submenuItem?.url ? `${props.submenuItem.url}` : ""}>
          <p>{props.submenuItem.description}</p>
        </Link>
        {isNestedList() && <ChevronRightIcon />}
      </MenuItem>
      {props.selectedMenuItems && props.selectedMenuItems[currentItemUrl] && (
        <NestedMenu
          parentUrl={currentItemUrl}
          submenuItem={props.selectedMenuItems[currentItemUrl]}
          selectedMenuItems={props.selectedMenuItems}
          fetchSubmenuList={props.fetchSubmenuList}
          key={`nestedmenu-${currentItemUrl}`}
        ></NestedMenu>
      )}
    </ul>
  );
}

export default NestedMenuItem;
