import { useEffect, useState } from "react";

const ChorPolice = () => {
  const [N1, setN1] = useState(0);
  const [N2, setN2] = useState(0);
  const [grid, setGrid] = useState([]);

  function handleDisplay() {
    let arr2d = [];
    for (let i = 0; i < N1; i++) {
      let row = [];
      for (let j = 0; j < N2; j++) {
        row.push(
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid black",
            }}
          ></div>
        );
      }
      arr2d.push(row);
    }
    setGrid(arr2d);
  }

  function handlePlay() {
    function copy(grid) {
      return grid.map((p) => [...p]);
    }
    let r1 = Math.floor(Math.random() * N1);
    let c1 = Math.floor(Math.random() * N2);

    for (let i = 0; i < N1; i++) {
      for (let j = 0; j < N2; j++) {
        if (i !== r1 && j !== c1 && i - j !== r1 - c1) {
          let newGrid = copy(grid);

          for (let i = 0; i < N1; i++) {
            for (let j = 0; j < N2; j++) {
              newGrid[i][j] = (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid black",
                    backgroundColor: "white",
                  }}
                ></div>
              );
            }
          }

          newGrid[i][j] = (
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid black",
                backgroundColor: "red",
              }}
            >
              😇
            </div>
          );

          newGrid[r1][c1] = (
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid black",
                backgroundColor: "blue",
              }}
            >
              🫡
            </div>
          );
          setGrid(newGrid);
        }
      }
    }
  }

  return (
    <div>
      <input type="number" value={N1} onChange={(e) => setN1(e.target.value)} />
      <input
        type="number"
        value={N2}
        onChange={(e) => setN2(e.target.value)}
        onBlur={handleDisplay}
      />
      <button onClick={handlePlay}>play</button>
      <div style={{ display: "flex", flexWrap: "wrap", width: N1 * 55 }}>
        {grid}
      </div>
    </div>
  );
};

export default ChorPolice;
