import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskTitle, setTitle] = useState("");
  const [taskDescription, setDesc] = useState("");
  const { createTask }: any = useContext(TaskContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTask(taskTitle, taskDescription);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-md mx-auto pb-2">
      <form className="bg-slate-800 p-10 rounded-lg" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-white font-bold pb-2">Añadir tarea</h1>
        <input
          className="bg-slate-500 p-3 w-full mb-2 rounded-sm"
          placeholder="Escribe el titulo de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={taskTitle}
          autoFocus
        />
        <textarea
          className="bg-slate-500 p-3 w-full mb-2 rounded-sm"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDesc(e.target.value)}
          value={taskDescription}
        />
        <button className="bg-indigo-500 hover:bg-indigo-400 rounded-lg p-2 px-2 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
