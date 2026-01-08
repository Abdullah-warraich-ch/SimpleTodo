import React, { useEffect, useState } from "react";
import TaskContext from "../../Context/TaskContext";

function SearchBar() {
  const { tasks, setTasks } = React.useContext(TaskContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [originalTasks, setOriginalTask] = useState([...tasks]);
  function handleSearch(term) {
    if (term.trim() == "") {
      setTasks(originalTasks);
    } else {
      const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(term.toLowerCase())
      );
      setTasks(filteredTasks);
    }
  }

  useEffect(() => handleSearch(searchTerm), [searchTerm]);

  return (
    <div>
      <input
        placeholder="Search Task"
        type="text"
        className="font-kanit border border-gray-300 rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
