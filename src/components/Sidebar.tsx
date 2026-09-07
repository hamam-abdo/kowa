import { NavLink } from "react-router-dom";

import { NAV_SECTIONS } from "../constants";
import Icon from "./Icon";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 inset-s-0 z-40 flex w-64 flex-col bg-brand transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        {/* 1. الترويسة — الشعار */}
        <div className="relative pt-10 pb-2">
          <NavLink to="/" onClick={onClose} className="block">
            <img src="/logo.svg" alt="شعار كوا" className="mx-auto mb-2 h-12 w-auto" />
            <h1 className="text-center text-4xl font-bold text-white">
              KOWA <br /> <span>كوا</span>
            </h1>
          </NavLink>

          <button
            onClick={onClose}
            className="absolute inset-e-3 top-3 rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="إغلاق القائمة"
          >
            <Icon name="close" />
          </button>
        </div>

        {/* 2. روابط التنقل */}
        <nav className="flex-1 overflow-y-auto py-2">
          {NAV_SECTIONS.map((group, groupIndex) => (
            <ul
              key={groupIndex}
              className="border-t border-brand-line py-2 first:border-t-0"
            >
              {group.map((item) => (
                <li key={item.path} className="px-2 py-0.5">
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[15px] transition-colors ${
                        isActive
                          ? "bg-accent font-bold text-brand"
                          : "text-white hover:bg-white/10"
                      }`
                    }
                  >
                    <Icon name={item.icon} className="size-5 shrink-0" />

                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
