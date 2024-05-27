import axios from "axios";

const getTasks = (setTaskArr) => {
  axios
    .get("/tasks")
    .then((response) => {
      setTaskArr(response.data.data);
      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createTask = (_id, title, description, status, dueDate, setTaskArr) => {
  axios
    .post("/tasks", { _id, title, description, status, dueDate })
    .then((data) => {
      console.log(data);
      getTasks(setTaskArr);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateTask = (_id, title, description, status, dueDate, setTaskArr) => {
  axios
    .put(`/tasks/${_id}`, { _id, title, description, status, dueDate })
    .then((data) => {
      console.log("Updating Task is done!",data);
      getTasks(setTaskArr);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteTask = (_id, setTaskArr) => {
  axios
    .delete(`/tasks/${_id}`)
    .then((data) => {
      console.log("Delete API call successful ", data);
      getTasks(setTaskArr);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getTasks, createTask, updateTask, deleteTask };
