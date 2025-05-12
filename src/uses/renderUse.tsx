import { useEffect, useState } from "react";
import { useIsFirstRender } from "../hooks/useIsFirstRender";

export function RenderExample() {
  const [visible, setVisible] = useState(true);

const val = useIsFirstRender()
useEffect(() => {
   console.log(val)
})
useEffect(() => {
  setVisible(false)
}, [])

  return (
    <div>
      {visible ? <p>This will disappear in second render</p> : <p>Gone!</p>}
    </div>
  );
}