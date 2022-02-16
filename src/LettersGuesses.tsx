import React from "react"
import { WordRenderer } from "./WordRenderer"

interface ILettersGuessesProps {
    word: string,
    guessedLetters: Array<string>,
    numberOfGuesses: number
}

export const LettersGuesses:React.FC<ILettersGuessesProps> = ({ word, guessedLetters, numberOfGuesses }) => {

    return (
        <>
          <h2>Guess the hidden word</h2>
          <h5>Enter a letter from keyboard</h5> 
          <p>Number of wrong guesses: <b>{numberOfGuesses}</b></p>
          <WordRenderer word={word} guessedLetters={guessedLetters} /> 
        </>
    )

}