import React from 'react';
import { useFocus } from '../hooks/useFocus';

export function FocusableInput() {
  const [inputRef, setInputFocus] = useFocus<HTMLInputElement>();

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={setInputFocus}>Focus Input</button>
    </div>
  );
}