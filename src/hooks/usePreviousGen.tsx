import { useEffect, useRef } from "react"

// export const usePrevious = <T>(value: T): T | undefined => {
    export const usePrevious = <T,>(value: T): T | undefined => {
    const myRef = useRef(value)
    useEffect(() => {
      myRef.current = value
    }, [value])
    return myRef.current
}