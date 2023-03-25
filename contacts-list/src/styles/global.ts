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
`;

export const GlobalStyle = createGlobalStyle` 
    :root{
        --color-black: #000000;
        --color-white: #FFFFFF;
    }
`;
