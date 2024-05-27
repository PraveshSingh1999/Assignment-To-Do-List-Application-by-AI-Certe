import { TaskProvider } from "./context/TasksStore";
import TaskFormPage from "./pages/TaskFormPage";
import TasklistPage from "./pages/TasklistPage";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-gray-300">
      <TaskProvider>
        <TaskFormPage />
        <TasklistPage />
      </TaskProvider>
    </div>
  );
};

export default App;
