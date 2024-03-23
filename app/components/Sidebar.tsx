"use client";
import { useState } from "react";
import classNames from "classnames";
import { BiSolidCommentDetail, BiSolidDollarCircle } from "react-icons/bi";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const menuItems = [
    { id: 2, label: "Discussion Forums", icon: BiSolidCommentDetail, link: "/",},
    { id: 3, label: "Market Stories", icon: BiSolidDollarCircle, link: "/" },
    { id: 4, label: "Sentiment", icon: "l", link: "/" },
    { id: 5, label: "Market", icon: "l", link: "/" },
    { id: 6, label: "Sector", icon: "l", link: "/" },
    { id: 7, label: "Watchlist", icon: "l", link: "/" },
    { id: 8, label: "Events", icon: "l", link: "/" },
    { id: 8, label: "News/Interview", icon: "l", link: "/" },
  ];

  const handleSidebarToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={(toggleMenu ? "md:min-w-80" : " w-6 items-center")}>
      <div className={"flex h-full fixed text-white"}>
        <div
          className={
            "h-full flex flex-col px-4 pt-8 pb-4 bg-sky-900" +
            (!toggleMenu ? " hidden" : " ")
          }
        >
          <div className="Hello_user">
            <div className="flex items-center justify-between m-2 text-2xl ">
              <div className="flex ">
                <div className="w-9 h-9 rounded-full text-center mr-2 bg-slate-500">
                  <i className="ri-user-fill w-full text-3xl" />
                </div>
                <span>Hello User</span>
              </div>
              <span>
                <i className="ri-notification-2-fill"></i>
              </span>
            </div>
          </div>

          <hr className="h-2" />
          <div className="flex flex-col text-xl">
            {menuItems.map((menu:any) => {
              const Icon = menu.icon
              return (
                <div className="flex p-2 hover:bg-sky-700" key={menu.id}>
                  <div className="p-1 w-10">
                    <Icon />
                  </div>
                  <div className="text-md font-medium ">{menu.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="toggle_button flex items-center w-6 bg-slate-400">
          <button
            className="flex items-center text-5xl w-full h-40 bg-sky-900"
            onClick={handleSidebarToggle}
          >
            <i className={"ri-arrow-"+(toggleMenu ?"left-s-fill -m-2" : "right-s-fill -m-2") }></i>
          </button>
        </div>
      </div>
      </div>
  );
};

export default Sidebar;


