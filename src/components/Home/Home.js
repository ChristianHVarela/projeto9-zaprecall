import { ContainerPrincipal, ImageLogo, TextLogo, ButtonStartGame } from "./style"
import Logo from "../../assets/logo.png"

function Home(props){
    const {startGame, setStartGame} = props
    return (
        <ContainerPrincipal startGame={startGame}>
            <ImageLogo src={Logo}/>
            <TextLogo>ZapRecall</TextLogo>
            <ButtonStartGame data-test="start-btn" onClick={() => setStartGame(true)}>Iniciar Recall!</ButtonStartGame>
        </ContainerPrincipal>
    )
}

export default Home