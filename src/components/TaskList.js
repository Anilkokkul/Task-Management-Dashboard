import React from "react";

import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskList = ({ title, tasks, status, onDrop }) => {
  const taskCount = tasks.filter((task) => task.status === status).length;
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h1 className="text-xl font-semibold pb-3 border-b-4">
        {title}{" "}
        <span className="px-2 text-sm ml-2 text-gray-800 rounded-full bg-gray-200">
          {taskCount}
        </span>
      </h1>
      <DropArea onDrop={onDrop} status={status} index={0} />
      {tasks.map(
        (task, i) =>
          task.status === status && (
            <div key={task.id}>
              <TaskCard task={task} />
              <DropArea onDrop={onDrop} status={status} index={i + 1} />
            </div>
          )
      )}
    </div>
  );
};

export default TaskList;
