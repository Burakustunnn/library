//create global styles
import { createGlobalStyle } from "styled-components";
export const GlobalStyles=createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body{
    font-size: 1.5rem;
    background-color:${( {theme} )=> theme.mainColor } ;
}
`