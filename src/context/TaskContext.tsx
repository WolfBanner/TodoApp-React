import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext: any = createContext<null>(null);

export function TaskContextProvider(props: any) {
  const [tasks, setTasks]: [any, Function] = useState([]);

  function createTask(taskTitle: string, taskDescription: string) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId: number) {
    setTasks(tasks.filter((task: any) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
