import { useEffect, useState } from "react";

const Progressbar = () => {
  const [percent, setPercent] = useState(0);
  const [start, setStart] = useState(false);

  function handleColFill() {
    setStart(!start);
  }

  useEffect(() => {
    if (start === false) return;
    if (percent === 100) return;
    setTimeout(() => {
      setPercent(percent + 1);
    }, 50);
  }, [percent, start]);

  return (
    <div>
      <div
        style={{
          height: "20px",
          width: "80vw",
          border: "1px solid black",
          borderRadius: "50px",
          margin: "auto",
          //   backgroundColor: "red",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            borderRadius: "50px",
            backgroundColor: "red",
            textAlign: "center",
          }}
        >
          <span style={{ position: "absolute", left: "50%" }}>{percent}%</span>
        </div>
      </div>
      <button onClick={handleColFill}>start</button>
      <button onClick={handleColFill}>stop</button>
    </div>
  );
};

export default Progressbar;
