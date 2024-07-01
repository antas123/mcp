import { useState } from "react";

const StarRating = () => {
  let arr = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [color, setColor] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  function handleColor(item) {
    let colstar = { ...rating };

    for (let key in colstar) {
      if (key <= item) colstar[key] = true;
      else colstar[key] = false;
    }

    setColor(colstar);
  }

  function handleColorSet(item) {
    let colstar = { ...color };
    for (let key in colstar) {
      if (key <= item) colstar[key] = true;
      else colstar[key] = false;
    }
    setRating(colstar);
  }

  return (
    <div>
      {arr.map((item) => {
        return (
          <div
            key={item}
            onMouseOver={() => handleColor(item)}
            onMouseOut={() => handleColor(-1)}
            onClick={() => handleColorSet(item)}
            style={{
              marginTop: "50px",
              height: "80px",
              width: "80px",
              display: "inline-block",
              border: "1px solid black",
              backgroundColor:
                rating[item] || color[item] ? "yellow" : "lightgrey",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default StarRating;
