import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001";

// method default is GET from get data
export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const data = await res.json();
  return data;
};

// method POST for ADD
export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const newTodo = await res.json();
  return newTodo;
};

// mothod PUT for UPDATE
export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const updatedTodo = await res.json();
  return updatedTodo;
};

// mothod DELETE for DELETE
export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
