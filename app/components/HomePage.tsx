"use client";
import Sidebar from "./Sidebar";
import Discussion from "./Discussion";
import Market from "./MarketStories";
import MobileView from "./MobileView";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [isMobileViewVisible, setIsMobileViewVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobileViewVisible(true);
      } else {
        setIsMobileViewVisible(false);
      }
    };

    // Call handleResize initially and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="h-full w-full flex flex-row">
        <Sidebar />
        <div className="contents sm:hidden">
          {isMobileViewVisible ? <MobileView /> : null}
        </div>
        {!isMobileViewVisible && <Discussion />}
        {!isMobileViewVisible && <Market />}
      </div>
    </>
  );
};

export default HomePage;
