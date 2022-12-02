import { PerguntaFechada } from "./style"
import SetaPlay from "../../assets/seta_play.png"

function FlashCard(props){
    const {cards} = props

    return (
        <>
            {cards.map((card, index) => {
                return (
                    <PerguntaFechada key={index}>
                        <p>{`Pergunta ${index + 1}`}</p>

                        <img src={SetaPlay} alt="" />
                    </PerguntaFechada>
                )
            })}
            
        </>
    )
}

export default FlashCard