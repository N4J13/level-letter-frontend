import {
  Gamepad2,
  Ghost,
  Home,
  LandPlot,
  Library,
  ListIcon,
  Swords,
  TrafficCone,
  User2,
} from "lucide-react";

type SidenavItem = {
  id: number;
  title: string;
  items: {
    title: string;
    path: string;
    icon: JSX.Element | SVGElement;
  }[];
};

const size = 18;
const strokeWidth = 1.5;

export const sidenavItems: SidenavItem[] = [
  {
    id: 1,
    title: "Navigation",
    items: [
      {
        title: "Home",
        path: "/",
        icon: <Home strokeWidth={strokeWidth} size={size} />,
      },
      {
        title: "Profile",
        path: "/profile",
        icon: <User2 strokeWidth={strokeWidth} size={size} />,
      },
      {
        title: "My Games",
        path: "/my-games",
        icon: <Gamepad2 strokeWidth={strokeWidth} size={size} />,
      },
      {
        title: "Collections",
        path: "/collections",
        icon: <Library strokeWidth={strokeWidth} size={size} />,
      },
      {
        title: "Lists",
        path: "/lists",
        icon: <ListIcon strokeWidth={strokeWidth} size={size} />,
      },
    ],
  },
  {
    id: 2,
    title: "Categories",
    items: [
      {
        title: "Action",
        path: "/categories/action",
        icon: <Swords strokeWidth={strokeWidth} size={size} />,
      },
      {
        title: "Sports",
        path: "/categories/sports",
        icon: <LandPlot strokeWidth={strokeWidth} size={size} />,
      },
      {
        title: "Racing",
        path: "/categories/racing",
        icon: <TrafficCone strokeWidth={strokeWidth} size={size} />,
      },
      {
        title: "Horror",
        path: "/categories/horror",
        icon: <Ghost strokeWidth={strokeWidth} size={size} />,
      },
    ],
  },
];
