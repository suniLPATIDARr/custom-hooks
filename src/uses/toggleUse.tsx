import { useToggle } from "../hooks/useToggle";

export function ToggleButton() {
  const { value: isOn, toggle, setTrue, setFalse } = useToggle();

  return (
    <div>
      <p>Status: {isOn ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Turn On</button>
      <button onClick={setFalse}>Turn Off</button>
    </div>
  );
}