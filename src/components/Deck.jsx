import styled from "styled-components";
import logo from "../assets/logo.png"

import Flashcards from "./Flashcards"
import cards from "../constants-flashcards/cards"
import Footer from "./Footer";
import { useState } from "react";


export default function Deck(){
    const totalQuestions = cards.length;
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const handleQuestionsAnswered = () => {
        setAnsweredQuestions(prevCount => prevCount+1)
    }

    return (
        <ContainerMain>
            <ContainerLogo>
                <img src={logo} alt="logo zaprecall"/>
                <h1>ZapRecall</h1>
            </ContainerLogo>

            {cards.map((item, index) => (
                <Flashcards                    
                    key={item.question}
                    card={item}
                    index={index}
                    onQuestionAnswered={handleQuestionsAnswered}
                />
            ))}
            
            <Footer 
                answeredQuestions={answeredQuestions} 
                totalQuestions={totalQuestions}
            />
        </ContainerMain>
    )
}

const ContainerMain = styled.div `
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    padding-bottom: 200px;
    background-color: #FB6B6B;

    display: flex;
    flex-direction: column;
    align-items: center;

`
const ContainerLogo = styled.div `
    display: flex;
    align-items: center;
    margin: 42px 0 32px 0;
    img{
        width: 52px;
        margin-right: 30px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px; 
        letter-spacing: -0.012em;
        transform: rotate(0.58deg);
        color: #FFFFFF;
    }
`