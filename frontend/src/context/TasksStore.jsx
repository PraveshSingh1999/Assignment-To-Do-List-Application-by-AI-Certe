import { createContext, useState } from 'react';

// Create a context
const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskArr, setTaskArr] = useState([]);
  const [edit, setEdit] = useState(false)
  const [singleTask, setSingleTask] = useState({})

  return (
    <TaskContext.Provider value={{ taskArr, setTaskArr, edit, setEdit, singleTask, setSingleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
