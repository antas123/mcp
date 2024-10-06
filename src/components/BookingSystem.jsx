import { useState, useEffect } from "react";

const Booking = () => {
  const [seatSelected, setSeatSelected] = useState({});
  const [seatBooked, setSeatBooked] = useState({});
  const seats = [];

  useEffect(() => {
    const initialSeats = {};
    for (let i = 1; i <= 50; i++) {
      initialSeats[i] = false;
    }
    setSeatBooked(initialSeats);
    setSeatSelected(initialSeats);
  }, []);

  const handleSeatClick = (num) => {
    setSeatSelected((prevState) => ({
      ...prevState,
      [num]: !prevState[num],
    }));
  };

  for (let i = 0; i < 50; i++) {
    seats.push(
      <div
        key={i + 1}
        onClick={() => handleSeatClick(i + 1)}
        style={{
          height: 50,
          width: 50,
          textAlign: "center",
          border: "1px solid black",
          backgroundColor: seatBooked[i + 1]
            ? "grey"
            : seatSelected[i + 1]
            ? "red"
            : "lightgreen",
        }}
      >
        {i + 1}
      </div>
    );
  }

  const handleClick = () => {
    let obj = { ...seatBooked };
    for (let key in seatSelected) {
      if (seatSelected[key] === true) obj[key] = true;
    }
    setSeatBooked(obj);
    console.log("Booking confirmed", seatSelected, seatBooked);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Book your tickets!</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          flexWrap: "wrap",
          width: "590px",
        }}
      >
        {seats}
      </div>
      <button onClick={handleClick} style={{ margin: 30 }}>
        Book
      </button>
    </div>
  );
};

export default Booking;
