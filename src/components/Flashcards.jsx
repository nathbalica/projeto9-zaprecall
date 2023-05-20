import styled from "styled-components";
import seta_virar from "../assets/seta_virar.png"
import { useState } from "react";
import { GREEN, ORANGE, RED, GRAY } from "../constants-flashcards/colors";
import IconsFlashcards from "./IconsFlashcards";

export default function Flashcards({ card, index, onQuestionAnswered, anwersRow }) {
    const [start, setStart] = useState(false);
    const [turn, setTurn] = useState(false);
    const [status, setStatus] = useState('not-answer');

    const questionsAnswered = (statusAnswer) => {
        setStart(false);
        setStatus(statusAnswer);
        onQuestionAnswered()
        anwersRow(statusAnswer)
    }

    const startQuestion = () => {
        if (!start) {
            setStart(true);
        }
    };


    return (
        <Container data-test="flashcard">
            {!start ? (
                <OpenQuestion status={status}>
                    <h2 data-test="flashcard-text">Pergunta {index + 1}</h2>
                    <IconsFlashcards status={status} start={startQuestion} />
                </OpenQuestion>
            ) : (
                <CollapsedQuestion status={status}>
                    {!turn ? (
                        <>
                            <h2 data-test="flashcard-text">{card.question}</h2>
                            <img
                                data-test="turn-btn"
                                src={seta_virar}
                                onClick={() => setTurn(true)}
                                alt="seta de voltar"
                            />
                        </>) : (
                        <>
                            
                            <h2 data-test="flashcard-text">{card.answer}</h2>
                            <ContainerButtons>
                                <AnswerButtons data-test="no-btn" color={RED} onClick={() => questionsAnswered('incorrect')}>Não lembrei</AnswerButtons>
                                <AnswerButtons data-test="partial-btn" color={ORANGE} onClick={() => questionsAnswered('effort')}>Quase não lembrei</AnswerButtons>
                                <AnswerButtons data-test="zap-btn" color={GREEN} onClick={() => questionsAnswered('imediate')}>Zap</AnswerButtons>
                            </ContainerButtons>
                        </>
                    )}
                </CollapsedQuestion>
            )}

        </Container>
    )
}


const Container = styled.div`
  /* Estilos do Container, se necessário */
`;

const OpenQuestion = styled.div`
    width: 300px;
    height: 35px;
    margin: 10px;
    padding: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: ${({ status }) => status === 'not-answer' ? 'none' : 'line-through'};
    color: ${({ status }) => {
        if (status === 'incorrect') {
            return RED;
        } else if (status === 'effort') {
            return ORANGE;
        } else if (status === 'imediate') {
            return GREEN;
        } else {
            return GRAY;
        }
    }};
     
`
const CollapsedQuestion = styled.div`
    position: relative;
    width: 300px;
    min-height: 100px;
    margin: 12px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
   
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;

    img{
        position: absolute;
        width: 30px;
        height: 20px;
        bottom: 10px;
        right: 10px;
    }
`

const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`
const AnswerButtons = styled.button`
    width: 90px;
    /* height: 37px; */
    /* padding: 5px; */


    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: ${props => props.color};
    color: #FFFFFF;
    border: 1px solid ${props => props.color};

    border-radius: 5px;
    padding:  5px;
`

