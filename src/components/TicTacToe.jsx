import { useEffect, useState } from "react";

const TicTacToe = () => {
  let c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  let boxArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [box, setBox] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  });

  const [cross, setCross] = useState(false);
  const [win, setWin] = useState("");

  const handleSign = (num) => {
    if (cross && box[num] === 0) {
      setCross(false);
      setBox({ ...box, [num]: 1 });
    } else if (!cross && box[num] === 0) {
      setCross(true);
      setBox({ ...box, [num]: 2 });
    }
  };
  useEffect(() => {
    for (let i = 0; i < c.length; i++) {
      if (box[c[i][0]] === 1 && box[c[i][1]] === 1 && box[c[i][2]] === 1) {
        setWin("player 2 wins");
        setBox({
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
        });
        return;
      } else if (
        box[c[i][0]] === 2 &&
        box[c[i][1]] === 2 &&
        box[c[i][2]] === 2
      ) {
        setWin("player 1 wins");
        setBox({
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
        });
        return;
      }
      let a = 0;
      for (let key in box) {
        if (box[key] === 0) a = 1;
      }
      if (a === 0) {
        setWin("draw");
        setBox({
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
        });
      }
    }
  }, [box, cross]);
  console.log(cross, box);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "310px" }}>
      {boxArr.map((data) => (
        <div
          onClick={() => handleSign(data)}
          key={data}
          style={{
            height: "100px",
            width: "100px",
            border: "1px solid black",
          }}
        >
          {box[data] === 1 ? "*" : box[data] === 2 ? "o" : null}
        </div>
      ))}
      <p>{win}</p>
    </div>
  );
};

export default TicTacToe;
