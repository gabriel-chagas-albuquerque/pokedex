import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Ability } from "./Ability/Ability";
import { Move } from "./Move/Move";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import styled from "styled-components";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../Footer/footer";

async function getPokemonDetails(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  return await response.json();
}
export function PokemonDetails() {
  const { theme } = useContext(ThemeContext);
  const [pokemon, setPokemon] = useState({});
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
  const { id } = useParams();
  let iconTypePokemon = 'normal'

  useEffect(() => {
    async function fetchData() {
      const pokemon = await getPokemonDetails(id);
      setPokemon(pokemon);
      setAbilities(pokemon.abilities);
      setMoves(pokemon.moves);
    }
    fetchData();
  }, [id]);
  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "5px",
      }}
    >
      <Link
        to="/"
        style={{ backgroundColor: theme.background, color: theme.color }}
      >
        <button
          style={{
            backgroundColor: theme.background,
            color: theme.color,
            border: "transparent",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            style={{ fontSize: "50px" }}
          />{" "}
        </button>
      </Link>
      <Main>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <H1>{pokemon.name}</H1>
        <h3>Types:</h3>
        <TypePokemon>
          {pokemon.types?.map((type,index) => {
            switch (type.type.name) {
                case "grass":
                  iconTypePokemon = 'grass'
                  break;
  
                case "fire":
                  iconTypePokemon = 'fire'
                  break;
  
                case "water":
                  iconTypePokemon = 'water'
                  break;
  
                case "bug":
                  iconTypePokemon = 'bug'
                  break;
  
                case "flying":
                  iconTypePokemon = 'flying'
                  break;
  
                case "poison":
                  iconTypePokemon = 'poison'
                  break;
  
                case "electric":
                  iconTypePokemon = 'electric'
                  break;
  
                case "ground":
                  iconTypePokemon = 'ground'
                  break;
  
                case "fighting":
                  iconTypePokemon = 'fighting'
                  break;
  
                case "fairy":
                  iconTypePokemon = 'fairy'
                  break;
  
                case "rock":
                  iconTypePokemon = 'rock'
                  break;
  
                case "ghost":
                  iconTypePokemon = 'ghost'
                  break;
  
                case "steel":
                  iconTypePokemon = 'steel'
                  break;
  
                case "stellar":
                  iconTypePokemon = 'stellar'
                  break;
  
                case "psychic":
                  iconTypePokemon = 'psychic'
                  break;
  
                case "ice":
                  iconTypePokemon = 'ice';
                  break;
  
                case "dragon":
                  iconTypePokemon = 'dragon';
                  break;
  
                case "dark":
                  iconTypePokemon = 'dark';
                  break;
                default:
                  break;
              }
            return(
              <ContainerType>
              <IconType src={`./images/${iconTypePokemon}.png`} alt="Icon type Pokemon" />
              <p key={index}>{type.type.name}</p> 
              </ContainerType>
            )
          })}
        </TypePokemon>
        <H2>Abilities</H2>
        {abilities?.map((ability, index) => {
          const url = ability.ability.url;
          return <Ability key={index} url={url} />;
        })}

        <H2>Moves</H2>
        {moves?.map((move, index) => {
          const url = move.move.url;
          return <Move key={index} url={url} />;
        })}
        <Footer />
      </Main>
    </div>
  );
}

const Main = styled.main`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1350px;
`;

const H1 = styled.h1`
  text-transform:capitalize;
`
const H2 = styled.h2`
  text-transform:capitalize;
`
const TypePokemon = styled.div`
  display: flex;
  align-items:center;
  gap:20px;
  text-transform:capitalize;
`
const ContainerType = styled.div`
  display:flex;
  gap:3px;
  align-items:center;
`
const IconType = styled.img`
  width: 20px;
  height:20px;
`