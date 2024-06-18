import { PokemonDetails } from "../../components/PokemonDetails/PokemonDetails";
import styled from "styled-components";
import { ThemeTogglerButton } from "../../contexts/theme-toggler-button/theme-toggler-button";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import GlobalStyle from "../../globalStyles";

export function Details() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div style={{minHeight:'100vh'}}>
    <GlobalStyle />
      <Header style={{ backgroundColor: theme.background, color: theme.color }}>
        <Logo src="../../images/background-image.png" alt="Logo" />
        <ThemeTogglerButton />
      </Header>
      <PokemonDetails />
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-top:5px;
`;
