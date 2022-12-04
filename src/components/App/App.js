import { useState } from "react";
import GlobalStyle from "../../GlobalStyle";
import Home from "../Home/Home";
import Main from "../Main/Main";

function App() {
  const [startGame, setStartGame] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Main startGame={startGame} />
      <Home startGame={startGame} setStartGame={setStartGame} />
    </>
  );
}

export default App;
