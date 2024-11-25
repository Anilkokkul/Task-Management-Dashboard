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
    <div className=" my-5">
      <h1 className="text-center text-xl font-bold mb-3">Add Task</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTask({ ...task, id: uuidv4() }));
          setTask({ title: "", description: "", status: "todo" });
        }}
        className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={task.title}
          maxLength={100}
          minLength={3}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-1/3 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Task description"
          value={task.description}
          maxLength={100}
          minLength={3}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-1/2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
