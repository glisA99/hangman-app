import { Grid } from "@mui/material"
import { KeyboardButton } from "./KeyboardButton"

const keyboardLetters:Array<string> = ["A", "B", "C", "D", "E", "F" , "G", "H","I" ,"J", "K", "L", "M", "N", "O", "P" , "Q", "R", "S", "T", "U", "V", "W", "X"]

interface IKeyboardProps {
    addLetter: (letter: string) => void
}

export const Keyboard:React.FC<IKeyboardProps> = ({ addLetter }) => {

    return (
        <Grid container spacing={2} columns={8} id="keyboard-grid">
            {keyboardLetters.map(letter => {
                return (
                    <Grid item xs={1}>
                        <KeyboardButton letter={letter} addLetter={addLetter} />
                    </Grid>
                )
            })}
        </Grid>
    )

}