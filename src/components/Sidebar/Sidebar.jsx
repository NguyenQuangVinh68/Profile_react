import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import Home from "../Home";
import SidebarList from "./SidebarList";
import "./Sidebar.css";

function Sidebar() {
  const [expandSidebar, setExpandSidebar] = useState(true);
  const handleExpand = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <>
      <div className="container-fluid sidebar-section ">
        <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
          <div className="icon-for-sidebar-expand-and-collapse">
            <p onClick={handleExpand}>
              {expandSidebar ? (
                <BsChevronLeft size={30} />
              ) : (
                <BsChevronRight size={30} />
              )}
            </p>
          </div>
          <SidebarList expandSidebar={expandSidebar} />
        </div>
        {/* centent */}
      </div>
    </>
  );
}

export default Sidebar;
