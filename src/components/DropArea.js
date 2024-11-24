import React, { useState } from "react";

const DropArea = ({ onDrop, status, index }) => {
  const [showDrag, setShowDrag] = useState(false);
  return (
    <div
      onDragEnter={() => setShowDrag(true)}
      onDragLeave={() => setShowDrag(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        onDrop(status, index);
        setShowDrag(false);
      }}
      className={` ${
        showDrag
          ? "opacity-100 transition-all duration-300 flex justify-center items-center w-full h-40 border-2 border-dashed rounded-md p-4 mb-3"
          : "opacity-0"
      } `}
    >
      Drop here
    </div>
  );
};

export default DropArea;
