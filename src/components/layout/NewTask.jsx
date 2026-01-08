import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useContext, useState } from "react";
import TaskContext from "../../Context/TaskContext";

const NewTask = ({ isOpen, onClose }) => {
  const { setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const handleSubmit = (e) => {
    e.preventDefault(); // ← This prevents page refresh
    onClose();
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title,
        completed: false,
        priority,
      },
    ]);
    setTitle("");
    setPriority("Low");
  };
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white p-6 rounded-lg max-w-sm w-full">
          <DialogTitle className="text-lg font-bold mb-4">Add Task</DialogTitle>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              className="w-full border border-primary p-2 rounded mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <select
              className="w-full p-2  bg-primary text-white rounded mb-4"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-primary p-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-primary text-white p-2 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default NewTask;
