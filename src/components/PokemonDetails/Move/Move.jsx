import { useEffect, useState } from "react"
import styled from "styled-components"

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
        <NameMove>{nameMove}</NameMove>
    )
}

const NameMove = styled.p`
    font-size: 18px;
    text-transform:capitalize;
`