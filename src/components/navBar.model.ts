import React from "react";

export interface NavBarLink {
  id: string;
  label: string;
  reference: string;
  page: React.FC<any>;
  isHome?: boolean;
}

export interface NavBarProps {
  links: NavBarLink[];
}
