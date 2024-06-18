import { NamePokemons } from "../../components/NamePokemons/NamePokemons";
import GlobalStyle from "../../globalStyles";
import { useApi } from "../../hooks/useApi/useApi";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeTogglerButton } from "../../contexts/theme-toggler-button/theme-toggler-button";
import { ThemeContext } from "../../contexts/theme-context";
import { useEffect } from "react";
import { Footer } from "../../components/Footer/footer";

export function Home() {
  const [busca, setBusca] = useState("");
  const [filterSelect, setFilterSelect] = useState("#");
  const [pokemonType, setPokemonType] = useState(null);
  const [count, setCount] = useState(10);
  const { theme } = useContext(ThemeContext);
  const { data: dataPokemons, isLoading } = useApi(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  const namePokemons = dataPokemons.results?.map((pokemon) => {
    return pokemon.name;
  });
  const filteredNamePokemons = namePokemons?.filter((pokemon) => {
    return pokemon.includes(busca.toLowerCase());
  });
  useEffect(() => {
    async function getTypePokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/type/${filterSelect}/`
      );
      const data = await response.json();
      setPokemonType(data.pokemon);
    }
    getTypePokemon();
  }, [filterSelect]);

  if (filterSelect !== "#") {
    const namePokemonForType = pokemonType?.map(
      (pokemon) => pokemon.pokemon.name
    );
    const filteredPokemonsByType = namePokemonForType?.map((pokemon) => {
      const compareFiltersPokemon = filteredNamePokemons?.find(
        (pokemonFilter) => pokemonFilter === pokemon
      );
      return compareFiltersPokemon;
    });
    const filteredPokemons = filteredPokemonsByType?.filter(
      (pokemon) => pokemon !== undefined
    );
    console.log(filteredPokemons);
    if (isLoading) {
      return <TitleCarregando>Carregando...</TitleCarregando>;
    } else {
      return (
        <div
          style={{
            backgroundColor: theme.background,
            color: theme.color,
            minHeight: "100vh",
          }}
        >
          <GlobalStyle />
          <Main style={{ backgroundColor: theme.background }}>
            <Header
              style={{ backgroundColor: theme.background, color: theme.color }}
            >
              <Logo src="../../images/background-image.png" alt="Logo" />
              <Input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <Select
                name="type-pokemon"
                id="type-pokemon"
                onChange={(e) => setFilterSelect(e.target.value)}
              >
                <Option value="#">Selecione o tipo</Option>
                <Option value="grass">Grass</Option>
                <Option value="fire">Fire</Option>
                <Option value="water">Water</Option>
                <Option value="ground">Ground</Option>
                <Option value="rock">Rock</Option>
                <Option value="normal">Normal</Option>
                <Option value="fighting">Fighting</Option>
                <Option value="flying">Flying</Option>
                <Option value="poison">Poison</Option>
                <Option value="bug">Bug</Option>
                <Option value="ghost">Ghost</Option>
                <Option value="steel">Steel</Option>
                <Option value="stellar">Stellar</Option>
                <Option value="electric">Electric</Option>
                <Option value="psychic">Psychic</Option>
                <Option value="ice">Ice</Option>
                <Option value="dragon">Dragon</Option>
                <Option value="dark">Dark</Option>
                <Option value="fairy">Fairy</Option>
              </Select>
              <ThemeTogglerButton />
            </Header>
            <NamePokemons
              namePokemons={filteredPokemons}
              pokemonType={filterSelect}
              count={count}
            />
            <Button onClick={() => setCount(count + 10)}>
              <strong>Mostrar mais</strong>
            </Button>
            <Footer style={{ color: theme.color }} />
          </Main>
        </div>
      );
    }
  } else {
    if (isLoading) {
      return <TitleCarregando>Carregando...</TitleCarregando>;
    } else {
      return (
        <div
          style={{
            backgroundColor: theme.background,
            color: theme.color,
            minHeight: "100vh",
          }}
        >
          <GlobalStyle />
          <Main style={{ backgroundColor: theme.background }}>
            <Header
              style={{ backgroundColor: theme.background, color: theme.color }}
            >
              <Logo src="../../images/background-image.png" alt="Logo" />
              <Input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <Select
                style={{ cursor: "pointer" }}
                name="type-pokemon"
                id="type-pokemon"
                onChange={(e) => setFilterSelect(e.target.value)}
              >
                <Option value="#">Selecione o tipo</Option>
                <Option value="grass">Grass</Option>
                <Option value="fire">Fire</Option>
                <Option value="water">Water</Option>
                <Option value="ground">Ground</Option>
                <Option value="rock">Rock</Option>
                <Option value="normal">Normal</Option>
                <Option value="fighting">Fighting</Option>
                <Option value="flying">Flying</Option>
                <Option value="poison">Poison</Option>
                <Option value="bug">Bug</Option>
                <Option value="ghost">Ghost</Option>
                <Option value="steel">Steel</Option>
                <Option value="stellar">Stellar</Option>
                <Option value="electric">Electric</Option>
                <Option value="psychic">Psychic</Option>
                <Option value="ice">Ice</Option>
                <Option value="dragon">Dragon</Option>
                <Option value="dark">Dark</Option>
                <Option value="fairy">Fairy</Option>
              </Select>
              <ThemeTogglerButton />
            </Header>
            <NamePokemons
              namePokemons={filteredNamePokemons}
              pokemonType={filterSelect}
              count={count}
            />
            <Button
              onClick={() => setCount(count + 10)}
              style={{ borderColor: theme.color }}
            >
              <strong>Mostrar mais</strong>
            </Button>
            <Footer style={{ color: theme.color }} />
          </Main>
        </div>
      );
    }
  }
}

const Main = styled.main`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-width: 1350px;
`;
const TitleCarregando = styled.h1`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  margin-bottom:5px;
`;
const Input = styled.input`
  padding: 3px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-family:'Caveat',cursive;
`;
const Select = styled.select`
    padding: 5px
    font-family:'Caveat',cursive;
`
const Option = styled.option`
    cursor:pointer;
    font-family:'Caveat',cursive;
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  font-family:'Caveat',cursive;
  background-color: #ef4036;
  transition: 1s ease;
  &:hover {
    background-color: rgb(186, 46, 39);
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
