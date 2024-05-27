import { useContext, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { deleteTask, getTasks } from "../utils/handleApi";
import { TaskContext } from "../context/TasksStore";

const TasklistPage = () => {
  // const [taskArr, setTaskArr] = useState([]);

  const { taskArr, setTaskArr, setEdit, setSingleTask } =
    useContext(TaskContext);

  useEffect(() => {
    getTasks(setTaskArr);
  }, []);

  const handleEdit = (_id, title, description, status, dueDate) => {
    console.log("inside handle edit: ", _id, title, dueDate);
    setEdit(true);
    setSingleTask({ _id, title, description, status, dueDate });
  };

  const handleDelete = (_id) => {
    deleteTask(_id, setTaskArr)
  }

  return (
    <div className="bg-gray-300 mt-4 border-t-2 border-gray-500 py-2 w-screen min-h-screen flex flex-col justify-center items-center  gap-4 md:flex-wrap">
      {taskArr.map((task, index) => (
          <TaskCard
          key={task._id}
            id={task._id}
            title={task.title}
            description={task.description}
            status={task.status}
            dueDate={task.dueDate}
            handleEdit={() =>
              handleEdit(
                task._id,
                task.title,
                task.description,
                task.status,
                task.dueDate
              )
            }
            handleDelete={() => handleDelete(task._id)}
          />
      ))}
    </div>
  );
};

export default TasklistPage;
