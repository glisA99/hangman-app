import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Snackbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Figure } from './Figure';
import { Keyboard } from './Keyboard';
import { LettersGuesses } from './LettersGuesses';

interface IGameScreenProps {
    word: string
}

export const GameScreen = (props: IGameScreenProps) => {

    let navigate = useNavigate();

    const [guessedLetters, setGuessedLetters] = React.useState<Array<string>>([]);
    const [numberOfGuesses, setNumberOfGuesses] = React.useState<number>(0);
    const [openSuccess, setOpenSuccess] = React.useState<boolean>(false);
    const [openFailure, setOpenFailure] = React.useState<boolean>(false);
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    const [openDialogLost, setOpenDialogLost] = React.useState<boolean>(false);


    const addGuessedLetter = (letter: string) => {
        const newGuessedArray = [...guessedLetters, letter];
        // final 6th attempt
        if (numberOfGuesses + 1 == 6) {
            if (checkIfWordIsGuessed(props.word, newGuessedArray)) {
                setOpenDialog(true);
            } else {
                setNumberOfGuesses(number => number + 1);
                setOpenDialogLost(true);
            }
        }

        // first 5 attempts
        if (numberOfGuesses + 1 < 6) {
            if (checkIfWordIsGuessed(props.word, newGuessedArray) === true) {
                setOpenDialog(true);
            } else {
                setGuessedLetters(newGuessedArray);
                if (props.word.split("").find(_letter => _letter === letter)) {
                    setOpenSuccess(true);
                } else {
                    setNumberOfGuesses(number => number + 1);
                    setOpenFailure(true);
                }
            }
        }
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
        navigate("/");
    }

    const checkIfWordIsGuessed = (word: string, guessedLetters: Array<string>) => {
        const letters = word.split("");
        for (let i = 0;i < letters.length; i++) {
            const letter = letters[i];
            if (guessedLetters.find(_letter => _letter === letter) === undefined) return false;
        }
        return true;
    }

    const constructFigure = (numberOfGuesses: number) => {
        return {
            head: numberOfGuesses >= 1,
            body: numberOfGuesses >= 2,
            leftArm: numberOfGuesses >=3, 
            rightArm: numberOfGuesses >= 4,
            leftLeg: numberOfGuesses >= 5,
            rightLeg: numberOfGuesses >= 6
        }
    }

    const handleCloseSuccess = () => {
        setOpenSuccess(false);
    }

    const handleCloseFailure = () => {
        setOpenFailure(false);
    }
  
    return (
        <div id="game-screen">
            <div id="main-game-div">
                <Paper elevation={6} id='hangman-paper'>
                    <Figure hangman={constructFigure(numberOfGuesses)} />
                </Paper>
                <Paper elevation={6} id='words-paper'>
                    <LettersGuesses guessedLetters={guessedLetters} word={props.word} numberOfGuesses={numberOfGuesses}/>
                </Paper>
            </div>
            <div id="keyboard-div">
                <Paper elevation={12} id='keyboard-paper'>
                    <Keyboard addLetter={addGuessedLetter} />
                </Paper>
            </div>


            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openSuccess}
                onClose={handleCloseSuccess}
                key={"snack1"}
                autoHideDuration={2000}
            >
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                    Correct guess! Well done!
                </Alert>
            </Snackbar>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openFailure}
                onClose={handleCloseFailure}
                key={"snack2"}
                autoHideDuration={2000}
            >
                <Alert onClose={handleCloseFailure} severity="error" sx={{ width: '100%' }}>
                    Wrong guess! Try again!
                </Alert>
            </Snackbar>


            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="dialogg"
            >
                <DialogTitle id="alert-dialog-title" className="dialog-title">
                    <h2>Congratulations! You <b>WIN!</b></h2>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" className='context-texts'>
                    The word was: <br></br> {props.word} <br></br>
                    Number of guesses: {numberOfGuesses + 1}
                </DialogContentText>
                </DialogContent>
                <DialogActions className="dialog-actions-a">
                    <Button onClick={handleCloseDialog} variant="contained" className='dialog-button' >
                        Play again
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openDialogLost}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="dialogg"
            >
                <DialogTitle id="alert-dialog-title" className="dialog-title">
                    <h2> You LOST! </h2>
                    <h4> Better luck next time! </h4>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" className='context-texts'>
                    The word was: <br></br> {props.word} <br></br>
                </DialogContentText>
                </DialogContent>
                <DialogActions className="dialog-actions-a">
                    <Button onClick={handleCloseDialog} variant="contained" className='dialog-button' >
                        Play again
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
        
    )

}


