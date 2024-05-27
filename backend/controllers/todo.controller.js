let tasksList = [
  {
    _id: "101",
    title: "Assignment AI Certe",
    description: "Have to create ToDo application, Have to create ToDo application, Have to create ToDo application",
    status: "in-progress",
    dueDate: "26-05-2024",
  },
  {
    _id: "102",
    title: "Dashboard Creation",
    description: "Have to create a dashboard which includes tables, charts, Have to create a dashboard which includes tables, charts, Have to create a dashboard which includes tables, charts",
    status: "pending",
    dueDate: "31-05-2024",
  },
  {
    _id: "103",
    title: "Kanban Board",
    description: "create Kanban Board in react js create Kanban Board in react js create Kanban Board in react js",
    status: "pending",
    dueDate: "01-06-2024",
  },
];

const getTasks = async (req, res) => {
  try {
    res.status(200).json({
      message: "Data is send Successfully!",
      count: tasksList.length,
      data: tasksList,
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const getTask = async (req, res) => {
  try {
    const { _id } = req.params;

    const taskData = tasksList.find((item) => item._id === _id);

    if (taskData)
      res.status(200).json({
        message: "Single Data is Fetched Successfully!",
        data: taskData,
      });
    else res.status(404).json({ message: "Data Not Found" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const newTask = async (req, res) => {
  try {
    const { _id, title, description, status, dueDate } = req.body;
    tasksList.push({ _id, title, description, status, dueDate });
    res.status(200).json({ message: "New Task is Created Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, description, status, dueDate } = req.body;

    // tasksList = tasksList.map((item) =>
    //   item.id === _id ? { ...item, title:title, id:_id, description:description, status:status, dueDate:dueDate } : item
    // );
    const taskIndex = tasksList.findIndex((task) => task._id === _id)
    console.log("when updating task index and id:", taskIndex, tasksList[taskIndex]._id)
    if (taskIndex !== -1) {
      tasksList[taskIndex] = {
        ...tasksList[taskIndex],
        title: title,
        description: description,
        status: status,
        dueDate: dueDate,
      };
    }

    res
      .status(200)
      .json({ message: "Task is Updated Successfully!", data: tasksList });

  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { _id } = req.params;
    const remainingTask = tasksList.filter((item) => item._id !== _id)

    tasksList = [...remainingTask]
    res.status(200).json({ message: "New Task is Deleted Successfully!", data: tasksList });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export { getTask, getTasks, newTask, updateTask, deleteTask };
