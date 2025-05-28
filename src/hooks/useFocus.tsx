import { useRef, useCallback, RefObject } from 'react';

type UseFocusReturn<T extends HTMLElement> = [RefObject<T | null>, () => void];

export function useFocus<T extends HTMLElement = HTMLInputElement>(): UseFocusReturn<T> {
  const ref = useRef<T>(null);

  const setFocus = useCallback(() => {
    ref.current?.focus();
  }, []);

  return [ref, setFocus];
}