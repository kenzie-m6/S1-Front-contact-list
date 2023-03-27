import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
     *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    input  {
        outline: transparent;
    }

    button {
        border-color: transparent;
        cursor: pointer;
    }
    li {
        width: 90%;
        display: flex;
        gap: 1rem;
    }

    img {
        max-width: 80px;
        max-height: 80px;
        border-radius: 6px;
    }

`;

export const GlobalStyle = createGlobalStyle` 
    :root{
        --color-black: #000000;
        --color-white: #FFFFFF;
    }
`;
