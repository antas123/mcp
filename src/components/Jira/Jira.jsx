import { useEffect, useState } from "react";
import TasksList from "./TasksList";

const Jira = () => {
  const [task, setTask] = useState("");

  const [taskArr, setTaskArr] = useState([]);

  const handleAdd = () => {
    console.log(task, "task");
    setTaskArr([...taskArr, { name: task, status: "todo" }]);
  };
 
  const toDoList = taskArr.filter((data) => data.status === "todo");
  const inDevList = taskArr.filter((data) => data.status === "inDev");
  const inTesting = taskArr.filter((data) => data.status === "testing");
  const ready = taskArr.filter((data) => data.status === "done");

  const updateStatus = (selectedStatus, previousStatus, name) => {
    console.log('holy2',name,selectedStatus,previousStatus)
    const newTaskArr = taskArr.filter(
      (data) => data.name !== name 
    );
    setTaskArr([...newTaskArr, { name, status: selectedStatus }]);
  };

  console.log(taskArr,'holy')
  return (
    <div>
      <h1>Jira Board</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <select name="Priority">
        <option value="low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAdd}>Add Task</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TasksList
          updateStatus={updateStatus}
          listArr={toDoList}
          label={"to do"}
        />
        <TasksList
          updateStatus={updateStatus}
          listArr={inDevList}
          label={"in Dev"}
        />
        <TasksList
          updateStatus={updateStatus}
          listArr={inTesting}
          label={"In Testing"}
        />
        <TasksList
          updateStatus={updateStatus}
          listArr={ready}
          label={"Ready"}
        />
      </div>
    </div>
  );
};

export default Jira;
