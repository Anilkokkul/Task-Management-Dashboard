import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskStatus } from "./redux/taskSlice";

function App() {
  const { tasks, activeCard } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const onDrop = (status, position) => {
    if (activeCard === null || activeCard === undefined) return;
    dispatch(updateTaskStatus({ id: activeCard, status }));
  };

  return (
    <div className="App">
      <Navbar />
      <AddTask />
      <div className="grid grid-cols-3 min-h-screen gap-3 lg:px-28 px-5">
        <TaskList
          title={"To Do"}
          tasks={tasks}
          status={"todo"}
          onDrop={onDrop}
        />
        <TaskList
          title={"On Progress"}
          tasks={tasks}
          status={"on-progress"}
          onDrop={onDrop}
        />
        <TaskList
          title={"Done"}
          tasks={tasks}
          status={"done"}
          onDrop={onDrop}
        />
      </div>
    </div>
  );
}

export default App;
