import { React, useEffect, useState } from "react";
import Box from "./Box";

const Toast = () => {
  const [showToast, setShowToast] = useState({});
  const [toastlist, setToastlist] = useState([]);

  const handleToastlist = () => {
    setToastlist([...toastlist, <Box data={toastlist.length} />]);
  };
  console.log(toastlist, showToast, "kkk");

  useEffect(() => {
    if (toastlist.length > 0) {
      const index = toastlist.length - 1;
      setShowToast((prevShowToast) => ({
        ...prevShowToast,
        [index]: true,
      }));

      // Automatically hide toast after 2 seconds
      setTimeout(() => {
        setShowToast((prevShowToast) => ({
          ...prevShowToast,
          [index]: false,
        }));
      }, 2000);
    }
  }, [toastlist]);

  return (
    <div>
      {toastlist?.map((data, index) => {
        return showToast[index] === true && <div>{data}</div>;
      })}

      <button
        style={{ position: "absolute", top: 30 }}
        onClick={handleToastlist}
      >
        Call
      </button>
    </div>
  );
};

export default Toast;
