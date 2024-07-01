import React, { useState } from "react";

const FileExplorer = ({ folders }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div onClick={() => setShow(!show)}>
        {show ? "-" : "+"}
        {folders.name}
      </div>
      <div style={{ display: show ? "block" : "none", paddingLeft: "20px" }}>
        {folders?.childrens?.map((data) => {
          return <FileExplorer folders={data} />;
        })}
      </div>
    </div>
  );
};

export default FileExplorer;
