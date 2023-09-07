import "../styles/Word.css"
import WordProps from '../types/WordProps'
function Word({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: WordProps) {
  return (
   <div className="word-container">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letter-box" key={index}>
          <span 
            className="hidden-letter"
            style={{
              visibility: 
                guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
              color:
              !guessedLetters.includes(letter) && reveal ? 
              "red" : "black",
            }}
          >
          {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default Word
