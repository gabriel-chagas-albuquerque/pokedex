import React, { useContext } from 'react'
import { ThemeContext, themes } from "../theme-context";
import { ButtonTheme } from '../../components/ButtonTheme/button-theme';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ThemeTogglerButton = () => {
    const { theme,setTheme } = useContext(ThemeContext);
  
    return(
        <div style={{backgroundColor:theme.background}}>
         <ButtonTheme onClick={()=>setTheme(theme === themes.light ? themes.dark : themes.light)}>{theme === themes.light ? <FontAwesomeIcon icon={faMoon} style={{fontSize:'30px', width:'30px'}} /> : <FontAwesomeIcon icon={faSun} style={{fontSize:'30px', width:'30px'}}/>}</ButtonTheme> 
        </div>
    )
}