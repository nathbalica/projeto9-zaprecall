import styled from "styled-components";
import IconsFlashcards from "./IconsFlashcards";

export default function Footer({ answeredQuestions, totalQuestions, answeredOrder }) {
    const completedText = answeredQuestions <= totalQuestions
        ? `${answeredQuestions}/${totalQuestions} CONCLUÍDOS`
        : `${totalQuestions}/${totalQuestions} CONCLUÍDOS`;


    const hasIncorrectAnswer = answeredOrder.includes("incorrect");

    return (
        <ContainerFooter data-test="footer">
            {answeredQuestions === totalQuestions && !hasIncorrectAnswer && (
                <CongratulationsMessage  data-test="finish-text">
                    <CongratulationsText>
                        <span role="img" aria-label="Rosto Festivo">&#x1F973;</span> Parabéns!
                    </CongratulationsText>
                    <MessageText>
                        <span>Você não esqueceu de </span> <br />
                        <span>nenhum flashcard!</span>
                    </MessageText>
                </CongratulationsMessage>
            )}
            {answeredQuestions === totalQuestions && hasIncorrectAnswer && (
                <CongratulationsMessage  data-test="finish-text">
                    <CongratulationsText>
                        <span role="img" aria-label="Rosto Triste Suado">&#x1F613;</span> Putz...
                    </CongratulationsText>
                    <MessageText>
                        <span>Ainda faltam alguns... </span> <br />
                        <span>Mas não desanime</span>
                    </MessageText>
                </CongratulationsMessage>
            )}

            <h2>{completedText}</h2>
            <AnswersIcons>
                {answeredOrder.map((item, index) => (
                    <IconsFlashcards key={index} status={item} />
                ))}
            </AnswersIcons>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    bottom: 0;
    background-color: #FFFFFF;
    width: 100%;
    min-height: 45px;
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    padding: 15px;
    
`

const AnswersIcons = styled.li`
    display: flex;
    margin-top: 10px;
    gap: 5px;
`;
const CongratulationsMessage = styled.div`
    font-weight: 400;
    color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Recursive';
    margin-bottom: 10px;
`;


const CongratulationsText = styled.p`
    font-weight: 700;
    text-align: center;
    color: #333333;
`;

const MessageText = styled.p`
    color: #333333;
    margin-top: 10px;
    text-align: center;
`;

