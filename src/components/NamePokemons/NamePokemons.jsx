import { Pokemon } from "../Pokemon/pokemon"
import styled from "styled-components"
import React from 'react'

export function NamePokemons({namePokemons,count,pokemonType}){
   
  const filteredPokemons = namePokemons?.slice(0,count)
      return(
         <PokemonsList>
            {filteredPokemons?.map((pokemon,index) => {
            return(
               <Pokemon key={index} namePokemon={pokemon} pokemonType={pokemonType}/>
            )
         })}
         </PokemonsList>
      ) 
   }

const PokemonsList = styled.div`
   display:flex;
   flex-wrap:wrap;
   align-items:center;
   justify-content:center;
   padding:0 20px;
   gap:10px;
   
`