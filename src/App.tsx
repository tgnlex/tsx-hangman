import { useState, useEffect, useCallback } from 'react'
import words from './data/wordList.json'
import './styles/App.css'
import Keyboard from './components/Keyboard'
import Drawing from './components/Drawing'
import Word from './components/Word'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
   
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("")
  .every(letter => guessedLetters.includes(letter))
  
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return
   
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },  
  [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key 
      if (!key.match(/^[a-z]$/)) return 

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [addGuessedLetter])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)
    return ()  => {
      document.removeEventListener("keypress", handler)
    }
  }, [])
  return (
      <div className="container">
         <div className='results'>
          {isWinner && <h1 className="result-header winner">YOU WIN! <br/> Refresh to play again!</h1>}
          {isLoser && <h1 className="result-header loser">YOU LOSE! <br/> Refresh to play again!</h1>}
        </div>
        <Drawing numberOfGuesses={incorrectLetters.length}/>
        <Word 
          guessedLetters={guessedLetters} 
          wordToGuess={wordToGuess} 
          reveal={isLoser} />
          <div style={{ alignSelf: "stretch"}}>
          <Keyboard 
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter(letter => 
              wordToGuess.includes(letter)
            )}
            addGuessedLetter={addGuessedLetter} 
            inactiveLetters={incorrectLetters} 
           />
      </div>
    </div>
  )
}

export default App
                       