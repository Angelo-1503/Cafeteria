import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    :root {
    font-size: 10px;
    --main-color: #d3ad7f;
    --black: #131313;
    --bg: #010103;
    --border: 0.1rem solid rgba(255, 255, 255, 0.3)
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
}

`

export default globalStyles;