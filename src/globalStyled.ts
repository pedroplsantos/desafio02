import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    
    section{
        display:flex;
        height:100vh;
        width: 100%;
        background:#e2e2;
        padding: 25px;

        .product-content{
            display: grid;
            text-align:center;
            height:400px;
            background: #e2e2e2;
            border-radius: 15px;
            padding: 25px;
            
        }
    }
}
`