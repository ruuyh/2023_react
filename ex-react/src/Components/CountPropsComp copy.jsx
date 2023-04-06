import { useState } from "react";

CountPropsCompCopy = (props) => {
  const { num } = props;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>{count}</h4>
      <button
        onClick={() => {
          setCount({ count: count + num });
        }}
      >
        +{num}
      </button>
    </div>
  );
};

export default CountPropsCompCopy;