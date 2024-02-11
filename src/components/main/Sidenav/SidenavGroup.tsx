import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type SidenavGroupProps = {
  title: string;
  items: {
    title: string;
    path: string;
    icon: SVGElement | JSX.Element;
  }[];
};

const SidenavGroup: React.FC<SidenavGroupProps> = ({ title, items }) => {
  const location = useLocation().pathname;
  return (
    <li className="space-y-4 pl-8 ">
      <div className="text-slate-500 text-[13px]">{title}</div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => {
          const isActive = location === item.path;
          return (
            <Link  to={item.path}>
              <li
                className={` ${
                  isActive ? "text-green-500 before:absolute before:bg-green-500 before:rounded-l-sm before:h-full before:w-1 before:top-1/2 before:-translate-y-1/2 before:right-0" : "text-white"
                } flex items-center py-2 relative gap-3 `}
                key={item.title}
              >
                <div>{item.icon as ReactNode}</div>
                <div className="font-normal text-[15px]">{item.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </li>
  );
};

export default SidenavGroup;
