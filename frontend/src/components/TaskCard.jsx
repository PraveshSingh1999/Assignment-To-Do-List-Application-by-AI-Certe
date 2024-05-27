const TaskCard = ({ _id, title, description, status, dueDate, handleEdit, handleDelete }) => {

  return (
    <div className="bg-white mt-2 rounded-lg shadow-md p-6 max-h-sm max-w-sm md:max-w-lg">
      <div>
        <h2 className="text-xl font-semibold text-gray-700">Task</h2>
        <p className="font-light ml-2 text-gray-800">{title}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1 text-gray-700">Description</h3>
        <p className="font-light ml-2 text-left text-gray-800 max-w-56 break-words text-balance"> 
          {description}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Status</h3>
        <p className="font-light ml-2 text-gray-800">{status}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Due Date</h3>
        <p className="font-light ml-2 text-gray-800">{dueDate}</p>
      </div>

      <div className="w-full flex justify-between">
        <button className={`bg-green-500 text-md px-4 py-1 text-white uppercase hover:bg-green-700 transition duration-300`} onClick={handleEdit}>Edit</button>
        <button className="bg-red-500 text-md px-4 py-1 text-white uppercase hover:bg-red-700 transition duration-300" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
