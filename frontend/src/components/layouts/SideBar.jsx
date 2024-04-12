import React from "react";
import { Card, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import { newNavigationItems } from "../../utils/dataArrays";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowDown, ArrowRight } from "../../utils/icons";

export const SideBar = ({ handleSidebar, sidebar }) => {
  const [linkchange, setLinkChange] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("/dashboard");
  const changeUrl = () => {
    setCurrentUrl(window.location.href.split("/").pop());
  };
  useEffect(() => {
    changeUrl();
  }, [linkchange]);
  return (
    <Card
      className={`h-full rounded-none bg-[#2a2a42] w-[60%] md:w-[16%]  flex flex-col font-inter z-50 items-start fixed p-2  transition transform duration-500 ease-in-out fade-right-enter-active md:opacity-100 overflow-y-auto scrollbar-y-style ${sidebar ? "fade-right-enter-to" : "fade-right-enter-from"
        } `}
    >
      <div className="mb-2 flex items-center relative  gap-4 p-4">
        <img src={logo} alt="brand" className="w-[80%] md:w-[130px] rounded-[50%] item" />
        <span
          onClick={handleSidebar}
          className=" absolute top-0 right-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
      </div>
      <li className="list-none w-full">
        {newNavigationItems.map((item, itemIndex) => {

          return (
            <NavItem
              icon={item.icon}
              currentUrl={currentUrl}
              setLinkChange={setLinkChange}
              changeUrl={changeUrl}
              key={itemIndex}
              title={item.title}
              link={item.link}
              children={item.children}
              handleSidebar={handleSidebar}
            />
          );
        })}
      </li>
    </Card>
  );
};

const NavItem = ({
  icon,
  title,
  link,
  children,
  currentUrl,
  setLinkChange,
  handleSidebar,
}) => {
  const NavIcon = icon;
  const handleCLick = () => {
    handleSidebar();
    setLinkChange((pre) => !pre);

  };
  const [openChildren, setOpenChildren] = useState(false);
  const toggleChildren = () => {
    setOpenChildren(!openChildren); // Toggle the state when the span is clicked
    children === 0 && handleCLick()
  };
  return (
    <Link to={`${link !== "#" ? "/" + link : "#"}`}>
      <div className="flex w-full  items-end flex-col">
        <ListItem
          onClick={toggleChildren}
          className={`  ${currentUrl === link ? "bg-[#fc3c04] text-white" : "text-white"
            } w-full  hover:bg-[#10806f] hover:text-white active:bg-[#10806f] focus:bg-[#fc3c04] focus:text-white rounded-sm text-[14px]`}
        >
          <ListItemPrefix>
            <NavIcon className="h-5 w-5" />
          </ListItemPrefix>
          <span className={`font-inter flex-1 font-normal  whitespace-nowrap mr-2 `}>{title}</span>
          {children !== 0 && (
            <span>
              {openChildren ? (
                <ArrowDown className="h-[10px] w-[10px]" />
              ) : (
                <ArrowRight className="h-[10px] w-[10px]" />
              )}
            </span>
          )}
        </ListItem>
        {openChildren && (
          <ul className="w-[93%] border-[#10806f] border-l-[4px]">
            {children !== 0 && (
              children.map((child, childIndex) => {
                const ChildNavIcon = child.icon;
                return (
                  <Link to={child.link}>
                    <ListItem
                      onClick={handleCLick}
                      className={`  ${currentUrl === child.link ? "text-[#fc3c04] " : "text-white"
                        }   hover:bg-[#10806f] hover:text-white rounded-sm font-bold focus:bg-[#fc3c04] focus:text-white text-[15px]`}
                    >
                      <ListItemPrefix>
                        <ChildNavIcon className="h-[14px] w-[14px]" />
                      </ListItemPrefix>
                      <span className={`font-inter text-[13px] font-semibold whitespace-nowrap `}>{child.title}</span>
                    </ListItem>
                  </Link>
                )
              })
            )}
          </ul>
        )}
      </div>
    </Link>
  );
};