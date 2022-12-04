import { ContentFooter, FooterConcluidos, ContainerButtonsAnswers, ButtonAnswer, ContainerFinishMessage, TextHelp, ContainerHit, ContainerMiss } from "./style";
import Certo from "../../assets/icone_certo.png"
import Erro from "../../assets/icone_erro.png"
import Quase from "../../assets/icone_quase.png"
import SetaPlay from "../../assets/seta_play.png"
import Party from "../../assets/party.png"
import Sad from "../../assets/sad.png"

function Footer(props){
    const {cards, answers, hit, miss} = props

    function quantiaRespostas(){
        return answers.respostas.length
    }

    return (
        <FooterConcluidos data-test="footer">
            <ContainerHit acertou={hit}>
                <ContainerFinishMessage data-test="finish-text"><img src={Party} alt=""/>Parabéns</ContainerFinishMessage>
                <TextHelp data-test="finish-text">Você não esqueceu de nenhum flashcard!</TextHelp>
            </ContainerHit>
            <ContainerMiss errou={miss}>
                <ContainerFinishMessage data-test="finish-text"><img src={Sad} alt=""/>Putz...</ContainerFinishMessage>
                <TextHelp data-test="finish-text">Ainda faltam alguns... mas não desanime!</TextHelp>
            </ContainerMiss>
            <ContentFooter>{`${quantiaRespostas()}/${cards.length} CONCLUÍDOS`}</ContentFooter>
            <ContainerButtonsAnswers answers={answers.respostas}>
                {answers.respostas.map((answer, index) => {
                    switch (answer) {
                        case "#FF3030":
                            return (
                                <ButtonAnswer key={index} src={Erro} />
                            )
                        case "#FF922E":
                            return (
                                <ButtonAnswer key={index} src={Quase} />
                            )
                        case "#2FBE34":
                            return (
                                <ButtonAnswer key={index} src={Certo} />
                            )
                        case "#333333":
                            return (
                                <ButtonAnswer key={index} src={SetaPlay} />
                            )
                        default:
                            return "";
                    }
                })}
            </ContainerButtonsAnswers>
        </FooterConcluidos>
    )
}

export default Footer