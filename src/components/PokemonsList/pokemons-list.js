import { useApi } from "../../hook/useApi/useApi"
export function PokemonsList(){
   const {data} = useApi("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
   const dataPokemon = useApi(`https://pokeapi.co/api/v2/pokemon/bulbasaur/`)
 
    return(
    <ul>
      {data.results?.map(pokemon => {
        return(
          <li key={pokemon.name}>
           <img src={dataPokemon.data.sprites.front_default} alt="Imagem Pokemon"></img>
            <p>{pokemon.name}</p>
            
          </li>
        )
      })}
    </ul> 
    )     
     
}