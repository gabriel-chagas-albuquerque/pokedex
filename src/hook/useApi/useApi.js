import { useEffect, useState } from "react";

export function useApi(url) {
    const [data,setData] = useState([])
    useEffect(() =>{
        fetch(url).then(response => response.json()).then(data => {
         setData(data)
       })
        
   },[url])
return {data}
}