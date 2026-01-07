import { createContext } from "react";
import { useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Sample Task", completed: false, priority: "High" },
    { id: 2, title: "Another Task", completed: true, priority: "low" },
    { id: 3, title: "Third Task", completed: false, priority: "Medium" },
    { id: 4, title: "Fourth Task", completed: true, priority: "High" },
  ]);
  

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
