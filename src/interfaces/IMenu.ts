type MenuItem = {
  key: number;
  description: string;
  url: string;
  childs: boolean;
  primaries: Array<MenuItem>;
};

export interface IMenu {
  menuList: Array<MenuItem>;
  fetchSubmenuList: Function;
  selectedMenuItems: any;
}

export interface IMegaMenu extends IMenu {
  onHover: Function;
  banner: string;
}

export interface IHamburgerMenu extends IMenu {
  onClick: Function;
}

export interface IMenuItem {
  parentKey?: string;
  menuItem: MenuItem;
  primaries: Array<MenuItem>;
  fetchSubmenuList: Function;
}
