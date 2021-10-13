import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{

}
*,::after,::before{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
body{
   font-family: 'Montserrat', sans-serif;
}
img{
	width: 100%;
}

`;

export default GlobalStyle;