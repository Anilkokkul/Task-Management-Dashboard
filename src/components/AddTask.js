import { addTask } from "../redux/taskSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "todo",
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTask({ ...task, id: uuidv4() }));
          setTask({ title: "", description: "", status: "todo" });
        }}
        className="container mx-auto p-5 flex justify-center gap-4 items-center"
      >
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Task title"
          required
          className="border py-2 px-1 rounded-md focus:border-green-400"
        />
        <input
          type="text"
          required
          value={task.description}
          className="border py-2 px-1 rounded-md focus:border-green-400"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Task description"
        />
        <input
          type="submit"
          value="Submit"
          className=" cursor-pointer p-2 rounded-lg shadow-md text-white hover:bg-green-700 bg-green-500"
        />
      </form>
    </div>
  );
};

export default AddTask;
