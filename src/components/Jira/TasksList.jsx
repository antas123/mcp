import React from "react";

const TasksList = ({ listArr, label, updateStatus }) => {
  return (
    <div>
      <h4>{label}</h4>
      {listArr?.map((item, index) => {
        return (
          <div style={{ width: 130, border: "1px solid black" }} key={index}>
            <div>{item.name}</div>
            <select
              name="Update Status"
              onChange={(e) => {          
                    console.log('joker')
                    updateStatus(e.target.value, item.staus, item.name,index)     
              }
              }
              defaultValue={'todo'}
            >
              <option value="todo">Todo</option>
              <option value="inDev">In dev</option>
              <option value="testing">Testing</option>
              <option value="done">Ready</option>
            </select>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
