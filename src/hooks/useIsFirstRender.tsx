import { useRef } from "react"

export function useIsFirstRender(){
    const myRef = useRef(true)

    if(myRef.current){
        myRef.current = false
        return true
    }
    return false
}