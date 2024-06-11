import styled from "styled-components"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
export function Pokemon(props) {
    const [infosPokemon,setInfosPokemon] = useState([])
    const [typePokemon, setTypePokemon] = useState(null)
    let colorCard = '#ccc'
    useEffect(() => {
        async function getPokemonDetails() {
           const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.namePokemon}/`)
            const data = await response.json()
            setInfosPokemon(data)
            setTypePokemon(data.types)
        }
        getPokemonDetails()
    },[props.namePokemon])
    if(typePokemon !== null) {
        switch (typePokemon[0].type.name) {
            case 'grass':
                colorCard = 'rgb(135, 199, 94)'
                break;

            case 'fire':
                colorCard = 'rgb(235, 116, 113)'
                break;
            
            case 'water':
                colorCard = 'rgb(138, 197, 248)'
                break;

            case 'bug':
                colorCard = '#70CCB0'
                break;

            case 'flying':
                colorCard = '#7DD3FC'
                break;

            case 'poison':
                colorCard = '#B84FB9'
                break;

            case 'electric':
                colorCard = '#FFCF4A'
                break;
            default:
                break;
        }
    }
    return(
        <Link to={`/${infosPokemon.name}`} style={{ textDecoration: 'none', color:'#000' }}>
             <Card bgcolor={colorCard}>
                 <Img src={infosPokemon.sprites?.front_default} alt={infosPokemon.name}/>
                 <TitlePokemon>{infosPokemon.name}</TitlePokemon>
                 <TypesPokemon>
                    {infosPokemon.types?.map((typePokemon,index) => {
                        return(
                            <Type key={index}>{typePokemon.type.name}</Type>
                        )
                    })}
                 </TypesPokemon>
             </Card>
        </Link> 
    
    )
  
}
const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:5px;
    width:190px;
    padding: 15px 10px;
    border-radius:10px;
    background-color: ${props => props.bgcolor};
    text-decoration:#000;
    heigth:250px;
  ` 
  const Img = styled.img`
    width:50%;
  `
  
  const TitlePokemon = styled.h1`
    font-size:20px;
    font-weigth:500;
    text-transform:capitalize;
  `
  const TypesPokemon = styled.div`
    display:flex;
    gap:50px;
    justify-content=space-between;
  `
  const Type = styled.p `
    text-transform:capitalize;
  `
 