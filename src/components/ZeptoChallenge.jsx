import { useState, useEffect } from "react";

const ZeptoChallenge = () => {
  const [user, setUser] = useState([]);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  function handleChange(e) {
    setUser(e.target.value);
  }

  useEffect(() => {
    const fetchData = () => {
      console.log(user);
      if (user.length === 0) {
        setUser([]);
        return;
      } else {
        console.log("hxhidh");
        fetch(`https://dummyjson.com/users/search?q=${user}`)
          .then((response) => response.json())
          .then((json) => {
            setSuggestedUsers(json);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    };
    fetchData();
  }, [user]);
  console.log(suggestedUsers);

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={user} />
      {
        <div>
          {suggestedUsers?.users?.map((user) => (
            <div key={user.id}>{user.firstName}</div>
          ))}
        </div>
      }
    </div>
  );
};

export default ZeptoChallenge;
