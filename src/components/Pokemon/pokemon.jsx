import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export function Pokemon(props) {
  const [infosPokemon, setInfosPokemon] = useState([]);
  const [typePokemon, setTypePokemon] = useState(null);
  let colorCard = "#ccc";
  let iconTypePokemon =
    "https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/20px-Normal_icon.png";
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
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/20px-Grass_icon.png";
                break;

              case "fire":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/20px-Fire_icon.png";
                break;

              case "water":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/20px-Water_icon.png";
                break;

              case "bug":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/20px-Bug_icon.png";
                break;

              case "flying":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/20px-Flying_icon.png";
                break;

              case "poison":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/20px-Poison_icon.png";
                break;

              case "electric":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/20px-Electric_icon.png";
                break;

              case "ground":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/20px-Ground_icon.png";
                break;

              case "fighting":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/20px-Fighting_icon.png";
                break;

              case "fairy":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/5/5a/Fairy_icon.png/20px-Fairy_icon.png";
                break;

              case "rock":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/20px-Rock_icon.png";
                break;

              case "ghost":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/20px-Ghost_icon.png";
                break;

              case "steel":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/20px-Steel_icon.png";
                break;

              case "stellar":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/9/9f/Stellar_icon.png/20px-Stellar_icon.png";
                break;

              case "psychic":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/20px-Psychic_icon.png";
                break;

              case "ice":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/20px-Ice_icon.png";
                break;

              case "dragon":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png";
                break;

              case "dark":
                iconTypePokemon =
                  "https://archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/20px-Dark_icon.png";
                break;
              default:
                break;
            }
            return (
              <Container key={index}>
                <img
                  src={iconTypePokemon}
                  style={{ width: "25px", height: "25px" }}
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
