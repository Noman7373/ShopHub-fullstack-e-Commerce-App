import React from "react";
import UserMenu from "../components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto p-1 grid lg:grid-cols-[200px,1fr]">
        {/* Section for SideBar Menu */}

        <div className=" py-4 sticky top-24 max-h-[cal(100vh-96px)] overflow-y-auto hidden lg:block border-r">
          <UserMenu />
        </div>

        {/* Section for User Profile */}
        <div className="mx-1">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
