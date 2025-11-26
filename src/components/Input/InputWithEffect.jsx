import { useState, useEffect } from "react";
import "./Input.css"

export function InputWithEffect() {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (value) {
      setSum(value * 2);
    }
  }, [value]);

  return (
    <div className="inputWithEffect">
      <h2>Input with useEffect</h2>
      <input onChange={(e) => setValue(e.target.value)} />
      <p>
        You entered {value}. Multiplied by 2, that equals {sum}
      </p>
    </div>
  );
}
