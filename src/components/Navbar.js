import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-3 py-5 border-b">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-gray-200 p-2 w-96 rounded-xl text-black"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
          Palak Jain
        </button>
      </div>
    </div>
  );
};

export default Navbar;
