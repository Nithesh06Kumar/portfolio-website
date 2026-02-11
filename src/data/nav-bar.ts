export interface TNavbarData {
  id: number;
  title: string;
  link: string;
  innerLink: boolean;
}
interface TNavbar {
  name: string;
  navigations: TNavbarData[];
}

export const navbarData: TNavbar = {
  name: "NITHESH KUMAR",
  navigations: [
    {
      id: 1,
      title: "Home",
      link: "/",
      innerLink: false,
    },
    {
      id: 2,
      title: "About",
      link: "/#about",
      innerLink: true,
    },
    {
      id: 3,
      title: "Resume",
      link: "/resume",
      innerLink: false,
    },
    {
      id: 4,
      title: "Skills",
      link: "/resume/#skill-section",
      innerLink: true,
    },
    {
      id: 5,
      title: "Contact",
      link: "/contact",
      innerLink: false,
    },
  ],
};
