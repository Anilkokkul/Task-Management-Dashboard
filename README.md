
# Task Management Dashboard

A simple task management app built with React and Redux, featuring drag-and-drop functionality and local storage persistence.

## Features

- Add Tasks: Create new tasks with a title, description, and status.
- Drag-and-Drop: Reorder tasks and move them between different statuses (e.g., To Do, In Progress, Done).
- Task Counts: Displays the count of tasks in each category in the header.
- Local Storage Integration: Saves tasks locally to preserve the state after refreshing the page.

# Approach
## Key Concepts
### 1.State Management:
Used Redux Toolkit to manage the global state for tasks. The state is structured as an array of tasks, each containing id, title, description, and status.

### 2.Drag-and-Drop:

- Implemented using event handlers (onDragStart,onDragEnd, onDrop, and onDragOver).
- Tasks can be reordered or moved between categories by updating their index or status in the state.

### 3.Persistence:

- Used localStorage to save and load tasks on application start.
Ensured robust error handling when accessing local storage.


## Assumptions
- Tasks have a fixed set of statuses (To Do, In Progress, Done).
- Each task has a unique id generated with uuid.
- The app is run in a modern browser that supports localStorage.

# How to Run the Project Locally

### 1.Clone the repository
```
git clone https://github.com/Anilkokkul/Task-Management-Dashboard.git
cd Task-Management-Dashboard
```

### 2.Install Dependencies:
Run the following command to install required packages

```
npm install
```
### 3.Run the App: Start the development server
```
npm start
```

### 4.Build the App (Optional): To create a production build:
```
npm run build
```