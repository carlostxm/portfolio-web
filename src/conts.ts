import { NavBarLink } from "./components/navBar.model";
import { About, Contact, Curriculum, Home } from "./pages";

export const ROUTING_CONFIG: NavBarLink[] = [
  {
    label: "Home",
    reference: "/",
    id: "home-page",
    page: Home,
    isHome: true,
  },
  {
    label: "About",
    reference: "about",
    id: "about-page",
    page: About,
  },
  {
    label: "CV",
    reference: "cv",
    id: "cv-page",
    page: Curriculum,
  },
  {
    label: "Contact",
    reference: "contact",
    id: "contact-page",
    page: Contact,
  },
];
