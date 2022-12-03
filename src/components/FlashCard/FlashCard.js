import SetaPlay from "../../assets/seta_play.png"
import SetaVirar from "../../assets/seta_virar.png"
import { ButtonPergunta, PerguntaAberta, PerguntaFechada, PerguntaAbertaEstagioDois } from "./style"
import { useState } from "react";
import Certo from "../../assets/icone_certo.png"
import Erro from "../../assets/icone_erro.png"
import Quase from "../../assets/icone_quase.png"


function FlashCard(props){
    const {card, indice} = props
    const [estagioum, setEstagioum] = useState(false)
    const [estagiodois, setEstagiodois] = useState(false)
    const [imageInitial, setImageInitial] = useState(SetaPlay)

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
        switch (chave) {
            case 1:
                setImageInitial(Erro)
                break;
            case 2:
                setImageInitial(Quase)
                break;
            case 3:
                setImageInitial(Certo)
                break;
            default:
                setImageInitial(SetaPlay)
                break;
        }
    }

    return (
        <>
            <PerguntaFechada estagioum={estagioum} estagiodois={estagiodois} >
                <p>{`Pergunta ${indice}`}</p>

                <img src={imageInitial} alt="" onClick={() => startCard()}/>
            </PerguntaFechada>
            <PerguntaAberta estagioum={estagioum} >
                <p>{card.question}</p>

                <img src={SetaVirar} alt="" onClick={() => virarResposta()}/>
            </PerguntaAberta>
            <PerguntaAbertaEstagioDois estagiodois={estagiodois}>
                <p>{card.answer}</p>
                <footer>
                    <ButtonPergunta onClick={() => escolherCard(1)} color={"#FF3030"}>Não lembrei</ButtonPergunta>
                    <ButtonPergunta onClick={() => escolherCard(2)} color={"#FF922E"}>Quase não lembrei</ButtonPergunta>
                    <ButtonPergunta onClick={() => escolherCard(3)} color={"#2FBE34"}>Zap!</ButtonPergunta>
                </footer>
            </PerguntaAbertaEstagioDois>
        </>
    )
}

export default FlashCard