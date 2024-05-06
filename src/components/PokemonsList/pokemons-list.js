import { useEffect, useState } from "react";
export function PokemonsList(){
    const [pokemonData, setPokemonData] = useState([])
    
      // const namePokemons =  await getPokemonInfos()
       
       async function getInfosPokemons(namePokemon) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`)
        setPokemonData(response.json()) 
      }
    
    useEffect(() =>{
     getInfosPokemons('bulbasaur') 
      
    },[])
    console.log(pokemonData);
    return <>
    <p>{pokemonData.name}</p>
     </>
}