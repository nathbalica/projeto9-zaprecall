import styled from "styled-components";
import logo from "../assets/logo.png"

export default function HomeScreen({onStartRecall}){
    return (
        <ContainerHome>
            <img src={logo}/>
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={onStartRecall}>Iniciar Recall!</button>
        </ContainerHome>
    )
}

const ContainerHome = styled.div `
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img{
       width: 136px; 
    }
    h1{
        margin: 30px 0 30px 0;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
    }
    button{
        width: 246px;
        height: 54px;
        font-size: 18px;
        font-weight: 400;

        color: #D70900;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }
`
