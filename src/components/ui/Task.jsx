import React, { useContext } from "react";
import { Checkbox } from "@headlessui/react";
import { Check } from "lucide-react";
import TaskContext from "../../Context/TaskContext";

function Task({ tasks }) {
  const [enabled, setEnabled] = React.useState(false);
  const { setTasks } = useContext(TaskContext);
  return tasks.map((item) => (
    <div
      className="flex  h-full items-center px-5 border-b-2 border-gray-200 py-5"
      key={item.id}
    >
      <div className="w-[10%]">
        <Checkbox
          checked={item.completed}
          onChange={() => {
            setTasks((prev) =>
              prev.map((task) =>
                task.id === item.id
                  ? { ...task, completed: !task.completed }
                  : task
              )
            );
          }}
          className="group flex justify-center items-center block size-6 rounded bg-gray-200 data-checked:bg-blue-500"
        >
          <Check className="size-5 stroke-[3px] text-white opacity-0 group-data-checked:opacity-100 transition-opacity" />
        </Checkbox>
      </div>
      <div className="w-4/5">
        <p className={item.completed ? "line-through text-gray-400" : ""}>
          {item.title}
        </p>
      </div>
      <div className="w-[10%]">
        <p className="text-gray-500">{item.priority}</p>
      </div>
    </div>
  ));
}

export default Task;
