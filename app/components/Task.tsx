"use client";
import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { editTodo, deleteTodo } from "@/api";

interface TaskType {
  task: ITask;
  //   task: {
  //     id: string;
  //     text: string;
  //   };
}

const Task: React.FC<TaskType> = ({ task }) => {
  const router = useRouter();
  const [modalEditOpen, setOpenEditModal] = useState<boolean>(false);
  const [modalDeleteOpen, setOpenDeleteModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setOpenEditModal(false);
    router.refresh();
  };

  const deleteHandler = async () => {
    await deleteTodo(task.id);
    setOpenDeleteModal(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        {/* EDIT */}
        <FiEdit
          onClick={() => setOpenEditModal(true)}
          className="text-blue-500"
          cursor="pointer"
          size={25}
        />
        <Modal modalOpen={modalEditOpen} setModalOpen={setOpenEditModal}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>

        {/* DELETE */}
        <FiTrash2
          onClick={() => setOpenDeleteModal(true)}
          className="text-red-500 "
          cursor="pointer"
          size={25}
        />
        <Modal modalOpen={modalDeleteOpen} setModalOpen={setOpenDeleteModal}>
          <h3 className="text-lg">Are you sure, you wanna delete this task?</h3>
          <div className="modal-action">
            <button onClick={deleteHandler} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
