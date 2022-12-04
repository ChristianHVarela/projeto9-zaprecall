import Header from "../Header/Header";
import { useState } from "react";
import Footer from "../Footer/Footer";
import { ContainerPrincipal } from "./style";
import FlashCard from "../FlashCard/FlashCard";

function Main() {
    const [cards, setCards] = useState([
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", finalizado: 0},
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces", finalizado: 0 },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula", finalizado: 0 },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões", finalizado: 0 },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma", finalizado: 0 },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências", finalizado: 0 },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes", finalizado: 0 },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", finalizado: 0 }
      ])
    const [answers, setAnswers] = useState({respostas: []})
    
    

    return (
        <ContainerPrincipal>
            <Header />
            {cards.map((card, index) => {
                return(
                    <FlashCard key={index} indice={index + 1} card={card} answers={answers} setAnswers={setAnswers} />
                )
            })}
            <Footer cards={cards} answers={answers}/>
        </ContainerPrincipal>
    )
}

export default Main