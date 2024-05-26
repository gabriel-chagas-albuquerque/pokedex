import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Ability } from "../Ability/Ability";
import { Move } from "../Move/Move";

async function getPokemonDetails(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return await response.json()
}
export function PokemonDetails() {
    const [pokemon,setPokemon] = useState({})
    const [abilities,setAbilities] = useState([])
    const [moves,setMoves] = useState([])
    const {id} = useParams()

    useEffect(() => {
        async function fetchData() {
          const pokemon = await getPokemonDetails(id);
          setPokemon(pokemon);
          setAbilities(pokemon.abilities)
          setMoves(pokemon.moves)
        }
        fetchData();
       
      },[id]);
      

     
      
      return(
        <div>
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
          <h1>{pokemon.name}</h1>
          <h2>Abilities</h2>
          {abilities?.map((ability,index) => {
            const url = ability.ability.url
            return(
              <Ability key={index} url={url} />
            )
          })}
          <h2>Moves</h2>
          {moves?.map((move,index) => {
            const url = move.move.url
            return(
              <Move key={index} url={url} />
            )
          })}
          <Link to='/'>
          <button>Voltar para a página principal</button>
          </Link>
        </div>
      )
}