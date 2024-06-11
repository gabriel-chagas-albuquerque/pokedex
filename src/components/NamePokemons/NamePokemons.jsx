import { useState } from "react"
import { useApi } from "../../hooks/useApi/useApi"
import { Pokemon } from "../Pokemon/pokemon"
import styled from "styled-components"
import React, {useContext} from 'react'
import { ThemeContext } from "../../contexts/theme-context"
export function NamePokemons(){
   const { theme } = useContext(ThemeContext)
   const [count,setCount] = useState(10)
   const {data:dataPokemons, isLoading:loading} = useApi("https://pokeapi.co/api/v2/pokemon?limit=151")
   const namePokemons = dataPokemons.results?.map(pokemon => { 
   return pokemon.name  
   }).slice(0,count)
   if(loading) {
      return  <Loading>Loading...</Loading>
   }else{
      return(
         <Main style={{backgroundColor:theme.background}}>
         <PokemonsList>
            {namePokemons?.map((pokemon,index) => {
            return(
               <Pokemon key={index} namePokemon={pokemon}/>
            )
         })}
         </PokemonsList>
         <Button onClick={() => 
            setCount(count+10)
         }><strong>Mostrar mais</strong></Button>
         
         </Main>
      ) 
   }
  
}

const PokemonsList = styled.div`
   display:flex;
   flex-wrap:wrap;
   align-content:center;
   justify-content:center;
   padding:10px 20px;
   gap:25px;
   max-width:1350px;
`
const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
padding: 10px;
width:200px;
border-radius:10px;
font-size:16px;
cursor:pointer;
margin-top:10px;
background-color:aqua;
transition:1s ease;
&:hover{
   background-color:purple;
   color:#fff;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
` 

const Main = styled.main`
   padding:10px 20px;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   overflow:hidden;
`
const Loading = styled.h1 `
   display:flex;
   justify-content:center;
   align-items:center;
`