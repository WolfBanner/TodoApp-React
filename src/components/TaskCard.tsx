import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }: any) {
  const { deleteTask }: any = useContext(TaskContext);
  // console.log(valor);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 p-2 mt-4 rounded-lg hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
