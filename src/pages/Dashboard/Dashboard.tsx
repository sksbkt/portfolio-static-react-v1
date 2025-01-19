import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import "./Dashboard.css";
import { IoHome } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import DashboardProjects from "./Components/DashboardProjects";
import clsx from "clsx";
import useTailMerge from "../../hooks/userTailMerge";
const Dashboard = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const sideMenuRef = useRef<HTMLDivElement>(null);

  const [currentTab, setCurrentTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement[]>([]);
  const singOut = async () => {
    await logout();
    navigate("/dashboard");
  };

  useEffect(() => {
    buttonRef.current.forEach((btn: HTMLButtonElement) =>
      btn.classList.remove("side-active")
    );
    buttonRef.current[currentTab].classList.add("side-active");
  }, [currentTab]);
  const handleClickOutside = (e: MouseEvent) => {
    e.preventDefault();

    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="w-[100dvw] h-[100dvh] flex relative">
      <div
        ref={sideMenuRef}
        className={useTailMerge("side-menu", isOpen && "!w-[300px]")}
      >
        <button
          ref={(el: any) => (buttonRef.current[0] = el)}
          className="side-button"
          onClick={() => setCurrentTab(0)}
        >
          <IoHome size={20} />
          <p>Dashboard</p>
        </button>
        <button
          ref={(el: any) => (buttonRef.current[1] = el)}
          className="side-button"
          onClick={() => setCurrentTab(1)}
        >
          <GoProjectSymlink />
          <p>Projects</p>
        </button>
        <div className="grow"></div>
        <button
          className="side-button"
          onClick={() => singOut()}
        >
          <PiSignOutBold />
          Signout
        </button>
      </div>
      <button
        className={useTailMerge(
          "absolute md:hidden bottom-0 left-0 m-10 p-3 bg-white rounded-full",
          isOpen && "hidden"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <RxHamburgerMenu
          size={20}
          color="black"
        />
      </button>
      <div className="dashboard-container">
        <DashboardProjects />
      </div>
    </section>
  );
};

export default Dashboard;
