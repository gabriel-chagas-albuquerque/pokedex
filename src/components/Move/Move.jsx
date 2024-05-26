import { useEffect, useState } from "react"

export function Move(props) {
    const [nameMove, setNameMove] = useState('')
    
    useEffect(() => {
        async function getMoveDetails(url) {
            const response = await fetch(url)
            const data = await response.json()
            setNameMove(data.name)
        }
        getMoveDetails(props.url)
    },[props.url])
    return(
        <>
        <h3>{nameMove}</h3>
        {/* <p>{effectMove}</p> */}
        </>
    )
}