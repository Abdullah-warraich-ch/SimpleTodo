import React from "react";
import Login from "./Login";
import SearchBar from "../components/ui/SearchBar";
import Task from "../components/ui/Task";
import { Plus } from "lucide-react";
function MainPage() {
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
          >
            <option
              value="Completed"
              className="hover:bg-white hover:text-primary"
            >
              Completed
            </option>
            <option value="In Progress">In Progress</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* Task List */}
      <div className="w-1/2 h-auto">
        <Task />
      </div>
      <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center text-white">
        <Plus />
      </div>
    </div>
  );
}

export default MainPage;
