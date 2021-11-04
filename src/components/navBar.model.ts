export interface NavBarLink {
  label: string;
  reference: string;
}

export interface NavBarProps {
  links: NavBarLink[];
}