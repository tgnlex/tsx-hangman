type KeyProps = {
    disabled?: boolean;
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
}

export default KeyProps;