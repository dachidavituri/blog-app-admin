import { useLogOut } from "../../../react-query/mutation/auth";
const AdminPanelView: React.FC = () => {
  const { mutate: logOut } = useLogOut();
  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
      <h1>admin panel view</h1>
      <button onClick={handleLogout} className="bg-black text-white">
        logout
      </button>
    </div>
  );
};
export default AdminPanelView;
