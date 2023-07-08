import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    :root {
        --gold: #D3BA4A;
        --navy-blue: #003153;
        --blue: #5D89BA;
        --gray: #2F4F4F;
        --pink: #FAEBD7;
        --white: #FFFF;
        --background: #F1F5F7;
        --light-gray: #CCCCCC;
        --gray-paragraph: #7d7e87;
    }
`;
