import { createSlice } from "@reduxjs/toolkit";
const loadTasksFromLocalStorage = () => {
  try {
    const serializedTasks = localStorage.getItem("tasks");
    return serializedTasks ? JSON.parse(serializedTasks).tasks : [];
  } catch (error) {
    console.error("Error loading tasks from local storage:", error);
    return [];
  }
};
const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadTasksFromLocalStorage(),
    activeCard: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    onDragStart(state, action) {
      state.activeCard = action.payload;
    },
    onDragEnd(state) {
      state.activeCard = null;
    },
    updateTaskStatus(state, action) {
      const { id, status, position } = action.payload;
      const currentIndex = state.tasks.findIndex((task) => task.id === id);

      if (currentIndex !== -1) {
        const [task] = state.tasks.splice(currentIndex, 1);
        task.status = status;
        state.tasks.splice(position, 0, task);
      }
    },
  },
});

export const { addTask, deleteTask, onDragStart, onDragEnd, updateTaskStatus } =
  taskSlice.actions;

export default taskSlice.reducer;
