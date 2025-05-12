import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export function SearchInput() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500); // Debounce by 500ms
  
    useEffect(() => {
      if (debouncedQuery) {
        console.log("Search API call for:", debouncedQuery);
        // fetchData(debouncedQuery);
      }
    }, [debouncedQuery]);
  
    return (
        <>
        <h3>Debounce</h3>
         <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
        </>
     
    );
  }
  