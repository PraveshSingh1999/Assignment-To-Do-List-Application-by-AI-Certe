import { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { createTask, updateTask } from "../utils/handleApi";
import { TaskContext } from "../context/TasksStore";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const uniqueId = nanoid(5);
  const { setTaskArr, edit, setEdit, singleTask } = useContext(TaskContext);

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return `${year}-${month}-${day}`;
  };

  const handleUpdate = () => {
    updateTask(singleTask._id, title, description, status, formatDate(dueDate), setTaskArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      console.log("edit value:", edit)
      // console.log(
      //   "when handle submit then, data -> ",
      //   uniqueId,
      //   title,
      //   description,
      //   status,
      //   formatDate(dueDate)
      // );
      createTask(
        uniqueId,
        title,
        description,
        status,
        formatDate(dueDate),
        setTaskArr
      );

      setTitle("");
      setDescription("");
      setStatus("");
      setDueDate("");
    } else {
      handleUpdate();
      if (edit) setEdit(false);
      setTitle("");
      setDescription("");
      setStatus("");
      setDueDate("");
    }
  };

  useEffect(() => {
    console.log("inside Form: singleTask -> ", singleTask);
    setTitle(singleTask.title);
    setDescription(singleTask.description);
    setStatus(singleTask.status);
    if (singleTask.dueDate) {
      const formattedDate = formatDate(singleTask.dueDate);
      setDueDate(formattedDate);
    } else {
      setDueDate("");
    }
  }, [singleTask]);

  return (
    <div className="max-w-sm mx-auto p-4 mt-8 bg-gray-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-gray-700 font-semibold">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="dueDate"
            className="block text-gray-700 font-semibold"
          >
            dueDate
          </label>
          <input
            type="Date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="flex w-full justify-center">
          {!edit ? (
            <button
              type="submit"
              className="bg-blue-500 uppercase text-white text-xl mt-4 py-2 px-6 rounded hover:bg-blue-600 transition duration-300 font-semibold"
            >
              create
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-green-500 uppercase text-white text-xl mt-4 py-2 px-6 rounded hover:bg-green-600 transition duration-300 font-semibold"
            >
              update
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
