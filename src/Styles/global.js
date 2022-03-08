import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --black: #000000;
    --white: #FFFFFF;

    --pale-gold: #c0B283;
    --silk: #dcd0c0;
    --paper: #f4f4f4;
    --charocoal: #373737;
}

body{
    background-color: var(--silk);
    color: var(--black);
}

body, input, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}

h1, h2, h3{
    font-weight: bold;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}
`;
