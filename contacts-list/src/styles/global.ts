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
        width: fit-content;
        padding: 10px;
        display: flex;
        gap: 1rem;
        cursor: pointer;
        border: 1px solid;
        border-radius: 6px;
        transition: 1s;
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
