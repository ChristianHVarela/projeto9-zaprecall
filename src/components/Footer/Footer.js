import { ContentFooter, FooterConcluidos } from "./style";

function Footer(props){
    const {cards} = props

    return (
        <FooterConcluidos>
            <ContentFooter>{`0/${cards.length} CONCLUÍDOS`}</ContentFooter>
        </FooterConcluidos>
    )
}

export default Footer