import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export function Pokemon(props) {
  const [infosPokemon, setInfosPokemon] = useState([]);
  const [typePokemon, setTypePokemon] = useState(null);
  let colorCard = "#ccc";
  let iconTypePokemon = "normal";
  useEffect(() => {
    async function getPokemonDetails() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.namePokemon}/`
      );
      const data = await response.json();
      setInfosPokemon(data);
      setTypePokemon(data.types);
    }
    getPokemonDetails();
  }, [props.namePokemon]);
  if (typePokemon !== null) {
    switch (typePokemon[0].type.name) {
      case "grass":
        colorCard = "rgb(135, 199, 94)";
        break;

      case "fire":
        colorCard = "rgb(235, 116, 113)";
        break;

      case "water":
        colorCard = "rgb(138, 197, 248)";
        break;

      case "bug":
        colorCard = "#70CCB0";
        break;

      case "flying":
        colorCard = "#7DD3FC";
        break;

      case "poison":
        colorCard = "#B84FB9";
        break;

      case "electric":
        colorCard = "#FFCF4A";
        break;

      case "ground":
        colorCard = "rgb(145, 81, 33)";
        break;

      case "fighting":
        colorCard = "rgb(255, 128, 0)";
        break;

      case "fairy":
        colorCard = "#EF70EF";
        break;

      case "rock":
        colorCard = "rgb(175, 169, 129)";
        break;

      case "ghost":
        colorCard = "#704170";
        break;

      case "steel":
        colorCard = " #60A1B8 ";
        break;

      case "stellar":
        colorCard = "#40B5A5";
        break;

      case "psychic":
        colorCard = "#EF4179";
        break;

      case "ice":
        colorCard = "#3DCEF3";
        break;

      case "dragon":
        colorCard = "#5060E1";
        break;

      case "dark":
        colorCard = "#624D4E";
        break;

      default:
        break;
    }
  }
  return (
    <Link
      to={`/${infosPokemon.name}`}
      style={{ textDecoration: "none", color: "#000" }}
    >
      <Card bgcolor={colorCard}>
        <Img
          src={infosPokemon.sprites?.front_default}
          alt={infosPokemon.name}
        />
        <TitlePokemon key={infosPokemon.name}>{infosPokemon.name}</TitlePokemon>
        <TypesPokemon>
          {infosPokemon.types?.map((typePokemon, index) => {
            switch (typePokemon.type.name) {
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
            return (
              <Container key={index}>
                <IconType
                  src={`./images/${iconTypePokemon}.png`}
                  alt="icon type pokemon"
                />
                <Type key={index}>{typePokemon.type.name}</Type>
              </Container>
            );
          })}
        </TypesPokemon>
      </Card>
    </Link>
  );
}
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 190px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.bgcolor};
  text-decoration: #000;
  transition: 0.8s ease-in-out;
  &:hover {
  color:#fff;
  }
`;
const Img = styled.img`
  width: 40%;
`;

const TitlePokemon = styled.h1`
  font-size: 20px;
  font-weigth: 500;
  text-transform: capitalize;
`;
const TypesPokemon = styled.div`
    display:flex;
    gap:20px;
    justify-content=space-between;
  `;
const Type = styled.p`
  text-transform: capitalize;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const IconType = styled.img`
  width: 20px;
  height:20px;
`