import React from "react"

interface IWordRendererProps {
    word: string,
    guessedLetters: Array<string>
}

export const WordRenderer:React.FC<IWordRendererProps> = ({ word, guessedLetters }) => {

    return (
        <h2 id='word-h2'>
            {word.split("").map(letter => {
                const guessed = guessedLetters.find(_letter => _letter === letter) !== undefined;
                return (
                    <LetterRenderer letter={letter} guessed={guessed} />
                )
            })}
        </h2>
    )

}

interface ILetterRendererProps {
    letter: string,
    guessed: boolean
}

const LetterRenderer:React.FC<ILetterRendererProps> = ({ letter, guessed }) => {

    return (
        <>
            {guessed === true ? letter : "_"}
        </>
    )

}