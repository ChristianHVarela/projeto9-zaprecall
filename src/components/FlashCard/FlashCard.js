import SetaPlay from "../../assets/seta_play.png"
import SetaVirar from "../../assets/seta_virar.png"
import { ButtonPergunta, PerguntaAberta, PerguntaFechada, PerguntaAbertaEstagioDois } from "./style"
import { useState } from "react";
import Certo from "../../assets/icone_certo.png"
import Erro from "../../assets/icone_erro.png"
import Quase from "../../assets/icone_quase.png"


function FlashCard(props){
    const {card, indice, answers, setAnswers} = props
    const [estagioum, setEstagioum] = useState(false)
    const [estagiodois, setEstagiodois] = useState(false)
    const [imageInitial, setImageInitial] = useState(SetaPlay)
    const [stage, setStage] = useState(false)
    const [colorInitial, setColorInitial] = useState("#333333")

    function virarResposta(){
        setEstagioum(false)
        setEstagiodois(true)
    }

    function startCard(){
        if (imageInitial === SetaPlay){
            setEstagioum(true)
            setEstagiodois(false)
        }
    }

    function escolherCard(chave){
        setEstagioum(false)
        setEstagiodois(false)
        setStage(true)
        let respostas = answers.respostas
        switch (chave) {
            case 1:
                respostas.push("#FF3030")
                setColorInitial("#FF3030")
                setImageInitial(Erro)
                break;
            case 2:
                respostas.push("#FF922E")
                setColorInitial("#FF922E")
                setImageInitial(Quase)
                break;
            case 3:
                respostas.push("#2FBE34")
                setColorInitial("#2FBE34")
                setImageInitial(Certo)
                break;
            default:
                respostas.push("#333333") 
                setColorInitial("#333333")
                setImageInitial(SetaPlay)
                break;
        }
        setAnswers({respostas})
    }

    return (
        <>
            <PerguntaFechada data-test="flashcard" estagioum={estagioum} estagiodois={estagiodois} color={colorInitial} stage={stage} >
                <p data-test="flashcard-text">{`Pergunta ${indice}`}</p>

                <img data-test="play-btn" src={imageInitial} alt="" onClick={() => startCard()}/>
            </PerguntaFechada>
            <PerguntaAberta data-test="flashcard" estagioum={estagioum} >
                <p data-test="flashcard-text">{card.question}</p>

                <img data-test="turn-btn" src={SetaVirar} alt="" onClick={() => virarResposta()}/>
            </PerguntaAberta>
            <PerguntaAbertaEstagioDois data-test="flashcard" estagiodois={estagiodois}>
                <p data-test="flashcard-text">{card.answer}</p>
                <footer>
                    <ButtonPergunta data-test="no-icon" onClick={() => escolherCard(1)} color={"#FF3030"}>Não lembrei</ButtonPergunta>
                    <ButtonPergunta data-test="zap-icon" onClick={() => escolherCard(2)} color={"#FF922E"}>Quase não lembrei</ButtonPergunta>
                    <ButtonPergunta data-test="partial-icon" onClick={() => escolherCard(3)} color={"#2FBE34"}>Zap!</ButtonPergunta>
                </footer>
            </PerguntaAbertaEstagioDois>
        </>
    )
}

export default FlashCard