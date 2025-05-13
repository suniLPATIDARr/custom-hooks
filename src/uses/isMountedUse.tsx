import { useState } from 'react';
import { useIsMounted } from '../hooks/useIsMounted';

export const IsComponentMount = () =>{
    const isMounted = useIsMounted()
    const [first, setfirst] = useState('')
    setTimeout(() => {
        setfirst('after 3 sec')
    }, 3000);
    return isMounted?<div>Mounted {first}</div>:<div>'Pending'</div>
}