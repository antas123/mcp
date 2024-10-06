const Debouncing = () => {
  
    const debounced = (fn, delay) => {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn(...args);
        }, delay);
      };
    };

    const handleChange = (e) => {
      alert(e.target.value);
    };

    const Debounce = debounced(handleChange, 1000);
  
    return (
      <div>
        <input onChange={Debounce} type="text" />
      </div>
    );
  };
  
  export default Debouncing;
  