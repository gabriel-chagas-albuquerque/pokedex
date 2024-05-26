import { useEffect, useState } from "react";

export function useApi(url) {
    const [data,setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() =>{
        setIsLoading(true)
        fetch(url).then(response => response.json()).then(data => {
         setData(data)
         setIsLoading(false)
       }).catch(error => {
        setError(error)
        setIsLoading(false)
       })
        
   },[url])
return {data,isLoading,error}
}