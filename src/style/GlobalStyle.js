import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    
    box-sizing: border-box;
    margin: 0
    
}

:root {
    --default: #fcfcfc;
    --primary: #2194d2;
    --secondary: #f4f4f4;
    --grey: #5e5e5e;
    --border-shadow-default: 0 2px 8px rgba(0, 0, 0, 0.26);
    --border-radius: 5px;
}

body {
    fontFamily: 'IBM Plex Sans', sans-serif;
}

a {
    text-decoration: none;   
}
`;

export default GlobalStyle;
