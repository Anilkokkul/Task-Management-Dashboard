import { createSlice } from "@reduxjs/toolkit";

// local storage state persistence
const loadTasksFromLocalStorage = () => {
  try {
    const serializedTasks = localStorage.getItem("tasks");
    return serializedTasks ? JSON.parse(serializedTasks).tasks : [];
  } catch (error) {
    console.error("Error loading tasks from local storage:", error);
    return [];
  }
};
//task slices for functionality
const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadTasksFromLocalStorage(), //calling at time for declaring to get task from local storage
    activeCard: null,
  },
  reducers: {
    // task add function
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    //function for deleting tasks
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    //function for selecting the task to be dragged
    onDragStart(state, action) {
      state.activeCard = action.payload;
    },
    //function for selecting the task to be dropped
    onDragEnd(state) {
      state.activeCard = null;
    },
    //function for dropping and updating the task status and position
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
