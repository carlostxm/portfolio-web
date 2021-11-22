import React from "react";
import { Theme } from "../model";

export interface NavBarLink {
  id: string;
  label: string;
  reference: string;
  page: React.FC<any>;
  isHome?: boolean;
}

export interface NavBarProps {
  links: NavBarLink[];
  onChangeTheme: (theme: Theme) => void;
}
