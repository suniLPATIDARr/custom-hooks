import React, { useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

export const Dropdown=()=> {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>Toggle Dropdown</button>
      {open && (
        <div ref={ref} className="dropdown">
          <p>Dropdown content</p>
        </div>
      )}
    </div>
  );
}
