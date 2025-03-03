import { FaChartPie, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-5">Mastercard</h2>
      <ul>
        <li className="flex items-center p-3 bg-gray-700 rounded-md mb-3 cursor-pointer">
          <FaChartPie className="mr-2" /> Dashboard
        </li>
        <li className="flex items-center p-3 rounded-md mb-3 cursor-pointer">
          <FaSignOutAlt className="mr-2" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
