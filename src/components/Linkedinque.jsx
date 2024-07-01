import { useState, useEffect } from "react";

const Linkedinque = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const json = await response.json();
    setData(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const debounced = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handlefilter = (e) => {
    let filteredData = data.filter((item) => {
      return item.Year === e.target.value;
    });
    console.log(filteredData);
    console.log(data, "l");
    setData(filteredData);
  };

  const debounce = debounced(handlefilter, 2000);

  return (
    <div>
      <h1>Linkedinque</h1>

      <div style={{ marginBottom: "30px" }}>
        <input
          type="number"
          placeholder="Enter Year"
          onChange={(e) => debounce(e)}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          border: "1px solid black",
        }}
      >
        <h4
          style={{
            margin: 0,
            borderRight: "1px solid black",
            padding: 10,
            width: 100,
          }}
        >
          Year
        </h4>
        <p style={{ margin: 0 }}>Population</p>
      </div>

      {data?.map((item, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            border: "1px solid black",
          }}
        >
          <h4
            style={{
              margin: 0,
              borderRight: "1px solid black",
              padding: 10,
              width: 100,
            }}
            key={index}
          >
            {item.Year}
          </h4>
          <p style={{ margin: 0 }}>{item.Population}</p>
        </div>
      ))}
    </div>
  );
};

export default Linkedinque;
