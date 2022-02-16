import { Button, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MainMenuProps {
    setWord: (word: string) => void
}

export const MainMenu:React.FC<MainMenuProps> = ({ setWord }) => {

    const [input, setInput] = React.useState<string>("");
    const [error, setError] = React.useState<string | undefined>(undefined);

    let navigate = useNavigate();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (error !== undefined) setError(undefined);
        setInput(event.currentTarget.value.toUpperCase());
    }

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const valid = validateInput(input);
        if (valid === true) {
            setWord(input);
            navigate("/game");
        }
    }

    const validateInput = (input: string):boolean => {
        if (input.length == 0) {
            setError("Field can't be empty.");
            return false;
        }
        return true;
    }

    return (
        <div className='main-menu'>
            <h1>Hangman Game</h1>
            <p>Please enter a word:</p>
            <TextField 
                id="outlined-basic" 
                label="Word to guess:" 
                variant="outlined" 
                error={error !== undefined}
                helperText={error !== undefined ? error : undefined}  
                value={input}
                onChange={onChange}
            />
            <br></br>
            <Button 
                variant="contained" 
                className='main-menu-button'
                onClick={onClick}
            >
                Start game
            </Button>
        </div>
    )

}