import { useApi } from "../../hooks/useApi/useApi"
export function Pokemon(props) {
    const infosPokemon = useApi(`https://pokeapi.co/api/v2/pokemon/${props.namePokemon}/`)
    return(
        <div>
            <img src={infosPokemon.sprites?.front_default} alt={infosPokemon.name}/>
            <p>{infosPokemon.name}</p>
            
        </div>
    )
}