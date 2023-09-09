import Task from "./Task";
import { ITask } from "@/types/tasks";

interface TodoListType {
  tasks: ITask[];

  //Manual Create
  // tasks: [
  //   {
  //     id: string;
  //     text: string;
  //   }
  // ];
}

const TodoList: React.FC<TodoListType> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
