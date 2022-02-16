import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GameScreen } from "./GameScreen";
import { MainMenu } from "./MainMenu";

function App() {
  
  const [word, setWord] = React.useState<string>("");

  const setGuessWord = (word: string) => {
    setWord(word);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/game" element={<GameScreen word={word} />} />
          <Route path="/" element={<MainMenu setWord={setGuessWord} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
