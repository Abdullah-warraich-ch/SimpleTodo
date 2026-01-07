import React from "react";
import TaskContext from "../../Context/TaskContext";

function SearchBar() {
  const { tasks, setTasks } = React.useContext(TaskContext);
  const [searchTerm, setSearchTerm] = React.useState("");

  function handleSearch(term) {
    const filteredTasks = tasks.filter(
      (tasks) => tasks.title.toLowerCase() === term.toLowerCase()
    );
    setTasks(filteredTasks);
  }
  
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
