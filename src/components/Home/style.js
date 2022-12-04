import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: ${props => props.startGame ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
export const ImageLogo = styled.img`
    width: 136px;
    height: 161px;
    margin-top: 150px;
`

export const TextLogo = styled.p`
    width: 257px;
    height: 60px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`

export const ButtonStartGame = styled.button`
    width: 246px;
    height: 54px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #D70900;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    &:hover {
        background-color: #FDCBCB;
        transition: 0.7ms;
    }
`