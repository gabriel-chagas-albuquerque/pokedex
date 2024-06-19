import { useEffect, useState } from "react"
import styled from "styled-components"

export function Ability(props) {
    const [nameAbility, setNameAbility] = useState('')
    const [effectAbility, setEffectAbility] = useState('')
    useEffect(() => {
        async function getAbilityDetails(url) {
            const response = await fetch(url)
            const data = await response.json()
            setNameAbility(data.name)
            const effect = data.effect_entries[0].language.name === 'en' ?  data.effect_entries[0].effect : data.effect_entries[1].effect
            setEffectAbility(effect)
        }
        getAbilityDetails(props.url)
    },[props.url])
    return(
        <>
        <H3>{nameAbility}</H3>
        <P>{effectAbility}</P>
        </>
    )
}

const H3 = styled.h3`
    text-transform: capitalize;
`
const P = styled.p`
    text-align:center;
    max-width:800px;
`
