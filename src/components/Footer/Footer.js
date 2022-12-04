import { ContentFooter, FooterConcluidos } from "./style";

function Footer(props){
    const {cards, answers} = props

    function quantiaRespostas(){
        console.log(answers);
        return answers.respostas.length
    }

    return (
        <FooterConcluidos>
            <ContentFooter>{`${quantiaRespostas()}/${cards.length} CONCLUÍDOS`}</ContentFooter>
        </FooterConcluidos>
    )
}

export default Footer