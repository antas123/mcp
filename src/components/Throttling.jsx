const Throttling = () => {
  
    const myThrottle = (fn, delay) => {
      let lastInvoked = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastInvoked > delay) {
          fn(...args);
          lastInvoked = now;
        }
      };
    };
  
    function fun() {
      console.log("api called");
    }
    const throttle = myThrottle(fun, 5000);
  
    return (
      <div>
        <button onClick={throttle}>play</button>
      </div>
    );
  };
  
  export default Throttling;
  