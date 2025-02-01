export interface NavItem {
  label: string;
  isSpecial: boolean;
}

export interface NavItemProps extends NavItem {
  isMobile?: boolean;
}