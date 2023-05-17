import styled from "styled-components";
import seta_play from "../assets/seta_play.png"
import seta_virar from "../assets/seta_virar.png"
import { useState } from "react";
import { GREEN, ORANGE, RED } from "../constants-flashcards/colors";

export default function Flashcards({ card, index }) {
    const [start, setStart] = useState(false);
    const [turn, setTurn] = useState(false);

    return (
        <>
            {!start ? (
                <OpenQuestion>
                    <h2>Pergunta {index + 1}</h2>
                    <img src={seta_play} onClick={() => setStart(true)} alt="seta de play" />
                </OpenQuestion>
            ) : (
                <CollapsedQuestion>
                    {!turn ? (
                        <>
                            <h2>{card.question}</h2>
                            <img
                                src={seta_virar}
                                onClick={() => setTurn(true)}
                                alt="seta de voltar"
                            />
                        </>) : (
                        <>
                            <h2>{card.answer}</h2>
                            <ContainerButtons>
                                <AnswerButtons color={GREEN}>Não lembrei</AnswerButtons>
                                <AnswerButtons color={ORANGE}>Quase não lembrei</AnswerButtons>
                                <AnswerButtons color={RED}>Zap</AnswerButtons>
                            </ContainerButtons>
                        </>
                    )}
                </CollapsedQuestion>
            )}

        </>
    )
}

const OpenQuestion = styled.div`
    width: 300px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 15px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

`
const CollapsedQuestion = styled(OpenQuestion)`
    min-height: 100px;
    flex-direction: column;
    position: relative;
    align-items: baseline;

    h2{
        font-weight: 200;
        font-size: 18px;
        line-height: 22px;
        flex-direction: column;
    }
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
    width: 85px;
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
`

