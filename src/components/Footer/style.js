import styled from "styled-components";

export const FooterConcluidos = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

export const ContentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`

export const ContainerButtonsAnswers = styled.footer`
    height: 25px;
    display: ${props => props.answers.length > 0 ? "flex" : "none"};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
export const ButtonAnswer = styled.img`
    width: 23px;
    height: 23px;
    margin-left: 3px;
`

export const ContainerFinishMessage = styled.p`
    img {
        width: 23px;
        height: 23px;
        margin-right: 12px;
    }
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333333;
`

export const TextHelp = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`

export const ContainerHit = styled.div`
    display: ${props => props.acertou ? "block" : "none"};
`

export const ContainerMiss = styled.div`
    display: ${props => props.errou ? "block" : "none"};
`