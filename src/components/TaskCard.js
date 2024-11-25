import React from "react";
import { useDispatch } from "react-redux";
import { onDragEnd, onDragStart } from "../redux/taskSlice";
const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="p-4 rounded-md  bg-white cursor-grab active:opacity-30 opacity-100 active:border-2 active:border-dashed active:border-black"
      onDragStart={() => dispatch(onDragStart(task.id))} //this will set the task as active
      onDragEnd={() => dispatch(onDragEnd())} //this will set the task as null
      draggable={true}
    >
      <div className="flex justify-between items-center my-1">
        <h1 className="bg-orange-50 rounded-md p-1 py-0 text-orange-300">
          Low
        </h1>
        <button className="text-lg font-extrabold">...</button>
      </div>
      <div>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <p className="text-gray-500 h-6">{task.description}</p>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          <img src="/Ellipse-1.png" alt="ellips" />
          <img src="/Ellipse-2.png" alt="ellips" className="ml-[-8px]" />
          <img src="/Ellipse-3.png" alt="ellips" className="ml-[-8px]" />
        </div>
        <div className="flex gap-2 text-sm text-gray-400">
          <div className="flex gap-1 text-nowrap items-center">
            <img src="/message.png" alt="message" /> 12 Comments
          </div>
          <div className="flex gap-1 text-nowrap items-center">
            <img src="/folder.png" alt="folder" /> 0 files
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
