const Navbar = () => {
    return (
      <div className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <div className="flex items-center">
          <span className="mr-3">Administrator</span>
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full border-2 border-gray-500"
          />
        </div>
      </div>
    );
  };
  
  export default Navbar;
  