import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export function PreviousUseExample() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
  
    return (
      <div>
        <p>Current: {count}</p>
        <p>Previous: {prevCount ?? "N/A"}</p>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
    );
}