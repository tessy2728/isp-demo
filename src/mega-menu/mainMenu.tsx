import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const MainMenu = (props) => {
  const [menuItem, setMenuItem] = useState(props.menuItem);
  useEffect(() => {
    setMenuItem(props.menuItem);
  }, [props]);
  const { key: menuItemId, primaries, description, childs } = menuItem;

  return (
    <li className={childs === true ? "subnav list" : "subnav"}>
      <>
        <Button
          variant="contained"
          color="primary"
          key={`menubutton-${menuItemId}`}
          className="menuBtn"
        >
          {description}
          {childs === true ? <ArrowDropDown /> : ""}
        </Button>

        <div className="subnavContent">
          <div className="scrollContent">{props.children}</div>
        </div>
      </>
    </li>
  );
};

export default MainMenu;
