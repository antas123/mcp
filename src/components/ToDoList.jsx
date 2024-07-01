import React, { useState } from "react";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [listItem, setListItem] = useState("");
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [listItemEdit, setListItemEdit] = useState("");

  const handleDelete = (i) => {
    let newList = list.filter((data, index) => i !== index);
    setList(newList);
  };

  const handleAdd = () => {
    if (list.includes(listItem)) {
      alert("Item already exists");
      setListItem("");
      return;
    }
    setList([...list, listItem]);
    setListItem("");
  };

  const handleEdit = (index) => {
    setEditing(true);
    setEditIndex(index);
    setListItemEdit(list[index]);
  };

  const handleUpdate = () => {
    const updatedList = [...list];
    updatedList[editIndex] = listItemEdit;
    setList(updatedList);
    setEditing(false);
    setEditIndex(null);
    setListItemEdit("");
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditIndex(null);
    setListItemEdit("");
  };

  return (
    <div>
      <h1>ToDoList</h1>
      {editing ? (
        <>
          <input
            type="text"
            onChange={(e) => setListItemEdit(e.target.value)}
            value={listItemEdit}
            style={{ marginBottom: "30px" }}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="text"
            onChange={(e) => setListItem(e.target.value)}
            value={listItem}
            style={{ marginBottom: "30px" }}
          />
          <button onClick={handleAdd}>Add</button>
        </>
      )}

      {list.map((data, index) => (
        <div style={{ marginTop: "10px" }} key={index}>
          {data}
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
