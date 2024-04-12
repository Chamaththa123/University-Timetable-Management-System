import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, Navigate, useLocation } from "react-router-dom";
import { Burger } from "../../utils/icons";
import { SideBar } from "./SideBar";
import { Card, Tooltip, IconButton } from "@material-tailwind/react";
import { BellIcon, UserIcon } from "@heroicons/react/24/solid";
import { useStateContext } from "../../contexts/NavigationContext";

export const MainLayout = () => {
  const [signOutVisible, setSignOutVisible] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const dropdownRef = useRef(null);
  const sideBardownRef = useRef(null);
  const sideBarButtondownRef = useRef(null);
  const { token, setUser, setToken } = useStateContext();
  const handleLogout = () => {
    setUser(null);
    setToken(null);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSignOutVisible(false);
      }

      if (
        sideBardownRef.current &&
        !sideBardownRef.current.contains(event.target)
      ) {
        if (
          sideBarButtondownRef.current &&
          sideBarButtondownRef.current.contains(event.target)
        ) {
          setSidebar(true);
        } else {
          setSidebar(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userString = queryParams.get("user");
    const token = queryParams.get("token");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user)
      setToken(token)
    }
  }, [location.search]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const handleUserIconClick = () => {
    setSignOutVisible(!signOutVisible);
  };

  const handleSidebar = () => {
    setSidebar((pre) => !pre);
  };

  return (
    <section className="bg-blue-gray-50 w-full min-h-screen flex">
      <div ref={sideBardownRef} className="">
        <SideBar handleSidebar={handleSidebar} sidebar={sidebar} />
      </div>

      <section className="w-[100%] md:w-[85%] flex flex-col gap-5 md:ml-[15%]">
        <Card className="h-16 rounded-none bg-white w-full p-3 pl-3 flex flex-row justify-between items-center">
          <div>
            <div ref={sideBarButtondownRef} className="flex md:hidden">
              <Tooltip content="Sidebar">
                <div onClick={handleSidebar}>
                  <IconButton variant="text" className="bg-gray-500 mx-2">
                    <Burger className="h-4 w-4 text-white" />
                  </IconButton>
                </div>
              </Tooltip>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Tooltip content="View Notifications">
                <Link to="/notifications">
                  <IconButton variant="text" className="bg-gray-500 mx-2">
                    <BellIcon className="h-4 w-4 text-white" />
                  </IconButton>
                </Link>
              </Tooltip>
              <div className="relative" ref={dropdownRef}>
                <IconButton
                  variant="text"
                  className="bg-gray-500 mx-2 rounded-full"
                  onClick={handleUserIconClick}
                >
                  <UserIcon className="h-4 w-4 text-white" />
                </IconButton>

                {signOutVisible && (
                  <div className="absolute top-12 right-5 bg-white w-[150px] flex flex-col items-start p-3 z-10 shadow-md border-[1px] border-grey-800">
                    <Link
                      to="/account"
                      className="w-full"
                      onClick={() => setSignOutVisible(!signOutVisible)}
                    >
                      <div className="w-full font-inter border-b-2 py-2 cursor-pointer">
                        My Account
                      </div>
                    </Link>
                    <div className="w-full" onClick={handleLogout}>
                      <div className="font-inter py-2 cursor-pointer">
                        Sign Out
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
        <Outlet />
      </section>
    </section>
  );
};
