import { useState } from "react"
import { useApi } from "../../hooks/useApi/useApi"
import { Pokemon } from "../Pokemon/pokemon"
export function NamePokemonsList(){
   const [count,setCount] = useState(10)
   const dataPokemons = useApi("https://pokeapi.co/api/v2/pokemon?limit=151")  
   const namePokemons = dataPokemons.results?.map(pokemon => { 
    return pokemon.name  
   }).slice(0,count)
   return(
      <div>
         {namePokemons?.map((pokemon,index) => {
         return(
            <Pokemon key={index} namePokemon={pokemon}/>
         )
      })}
      <button onClick={() =>
       setCount(count+10)
      }>Mostrar mais</button>
      </div>
   ) 
}