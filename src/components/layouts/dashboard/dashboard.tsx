import { Outlet } from "react-router";

const DashboardLayout: React.FC = () => {
  return (
    <div className="pb-16 flex-1 p-16">
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
