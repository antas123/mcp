import { useState } from "react";

const CheckboxDemo = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleChangeAll = (e) => {
    setCheckedAll(!checkedAll);
    const isChecked = e.target.checked;
    // setCheckedAll(isChecked);
    setChecked({
      1: isChecked,
      2: isChecked,
      3: isChecked,
      4: isChecked,
    });
  };

  const handleChange = (num) => {
    let obj = { ...checked, [num]: !checked[num] };
    setChecked(obj);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div>
        <input
          type="checkbox"
          onChange={handleChangeAll}
          checked={
            checkedAll && checked[1] && checked[2] && checked[3] && checked[4]
          }
        />
        Slect all
      </div>
      <div>
        <input
          type="checkbox"
          checked={checked[1]}
          onChange={() => handleChange(1)}
        />
        1
      </div>
      <div>
        <input
          type="checkbox"
          checked={checked[2]}
          onChange={() => handleChange(2)}
        />
        2
      </div>
      <div>
        <input
          type="checkbox"
          checked={checked[3]}
          onChange={() => handleChange(3)}
        />
        3
      </div>
      <div>
        <input
          type="checkbox"
          checked={checked[4]}
          onChange={() => handleChange(4)}
        />
        4
      </div>
    </div>
  );
};

export default CheckboxDemo;
