import React from 'react';

interface IFigureProps {
  hangman: {
    head: boolean,
    body: boolean,
    leftArm: boolean,
    rightArm: boolean,
    leftLeg: boolean,
    rightLeg: boolean
  }
}

export const Figure = (props: IFigureProps) => {

    return (
        <svg height="250" width="200" className="figure-container">
          {/* ROD */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* HEAD */}
        {props.hangman.head ? <circle cx="140" cy="70" r="20"/> : ""}
        
        {/* BODY */}
        {props.hangman.body ? <line x1="140" y1="90" x2="140" y2="150"/> : ""}
        
        {/* ARMS */}
        {props.hangman.leftArm ? <line x1="140" y1="120" x2="120" y2="100"/> : ""}
        {props.hangman.rightArm ? <line x1="140" y1="120" x2="160" y2="100"/> : ""}
        
        {/* LEGS */}
        {props.hangman.leftLeg ? <line x1="140" y1="150" x2="120" y2="180"/> : ""}
        {props.hangman.rightLeg ? <line x1="140" y1="150" x2="160" y2="180"/> : ""}
      </svg>
    )

}