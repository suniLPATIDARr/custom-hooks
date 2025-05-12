import { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number | null) {
 const savedCallBack = useRef(callback)

 useEffect(() => {
  savedCallBack.current = callback
 }, [callback])
 
 useEffect(() => {
   if(!delay) return
  const timer = setTimeout(() => savedCallBack.current(), delay);
 
return ()=> clearTimeout(timer)
 }, [delay])
 
}
