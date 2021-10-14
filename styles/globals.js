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
   font-family: 'Inter', sans-serif;
   overflow-x: hidden;
}
img{
	width: 100%;
}

`;

export default GlobalStyle;
