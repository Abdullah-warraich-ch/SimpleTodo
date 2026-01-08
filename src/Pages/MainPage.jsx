import React, { useContext, useMemo, useState } from "react";
import Login from "../components/layout/Login";
import SearchBar from "../components/ui/SearchBar";
import Task from "../components/ui/Task";
import { Filter, Plus } from "lucide-react";
import TaskContext from "../Context/TaskContext";
import NewTask from "../components/layout/NewTask";
function MainPage() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState("All");

  const ooriginalTasks = [...tasks];

  const filteredTasks = useMemo(() => {
    switch (selected) {
      case "All":
        return [...tasks];
      case "Completed":
        return tasks.filter((task) => task.completed);

      case "High":
        return tasks.filter((task) => task.priority === "High");

      case "Medium":
        return tasks.filter((task) => task.priority === "Medium");

      case "Low":
        return tasks.filter((task) => task.priority === "Low");

      case "InProgress":
        return tasks.filter((task) => !task.completed);

      default:
        return [...tasks];
    }
  }, [tasks, selected]);

  return (
    <div className="flex flex-col justify-center items-center gap-6 ">
      {/* Login */}
      <div>
        <Login />
      </div>
      {/* Header */}
      <div>
        <h1 className="font-medium text-[26]">TODO LIST</h1>
      </div>
      {/* SearchBar */}
      <div className="w-1/2 flex">
        <div className="w-4/5 mr-4">
          <SearchBar />
        </div>

        <div className="w-1/5">
          <select
            name="Status"
            id="status"
            className="font-kanit bg-primary text-white rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary w-full"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="InProgress">In Progress</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* Task List */}
      <div className="w-1/2 h-auto">
        <Task tasks={filteredTasks} />
      </div>
      <div>
        <button
          className="w-10 h-10 bg-primary rounded-full flex justify-center items-center text-white hover:bg-white hover:text-primary hover:border hover:border-primary"
          onClick={() => setShowPopup(true)}
        >
          <Plus />
        </button>
        <NewTask isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </div>
    </div>
  );
}

export default MainPage;
