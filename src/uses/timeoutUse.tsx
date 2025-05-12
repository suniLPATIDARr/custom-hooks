import { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";

export function TimeoutExample() {
  const [visible, setVisible] = useState(true);

  const fCall = () =>{
    setVisible(false);

  }
  useTimeout(fCall, 3000); // hide after 3 seconds

  return (
    <div>
        The timeout is only re-created when delay changes, not every time the component re-renders.

savedCallback.current() will always point to the latest version of the callback.

This improves performance and prevents bugs due to stale closures.
      {visible ? <p>This will disappear after 3 seconds</p> : <p>Gone!</p>}
    </div>
  );
}