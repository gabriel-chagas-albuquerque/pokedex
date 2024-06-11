import { useEffect, useState } from "react"

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
        <h3>{nameAbility}</h3>
        <p>{effectAbility}</p>
        </>
    )
}