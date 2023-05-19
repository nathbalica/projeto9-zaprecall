import styled from "styled-components"

export default function Footer({ answeredQuestions, totalQuestions }) {
    const completedText = answeredQuestions <= totalQuestions
        ? `${answeredQuestions}/${totalQuestions} CONCLUÍDOS`
        : `${totalQuestions}/${totalQuestions} CONCLUÍDOS`;

    return (
        <ContainerFooter>
            <h2>{completedText}</h2>
        </ContainerFooter>
    )
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

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    padding: 15px;
    
`