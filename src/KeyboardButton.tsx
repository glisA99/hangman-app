import { Button, Paper } from '@mui/material';
import React from 'react';

interface IKeyboardButtonProps {
    letter: string,
    addLetter: (letter: string) => void
}

export const KeyboardButton:React.FC<IKeyboardButtonProps> = ({ letter, addLetter }) => {

    const [disabled, setDisabled] = React.useState<boolean>(false);

    const onClick = () => {
        addLetter(letter);
        setDisabled(true);
    }

    return (
        <Button 
            variant="contained" 
            className={`keyboard-button ${disabled ? "keyboard-button-disabled" : ""}`} 
            onClick={onClick} 
            disabled={disabled} 
        >
            {letter}
        </Button>
    )

}