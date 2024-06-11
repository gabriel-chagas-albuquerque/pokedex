import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const ButtonTheme = (props) => {

    const { theme } = useContext(ThemeContext)

        return(
            <button {...props} style={ {color: theme.color, backgroundColor: theme.background, border:'transparent', cursor:'pointer'}} />
        )
}