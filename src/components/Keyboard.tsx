import {KEYS} from '../data/Keys';
import KeyProps from '../types/KeyboardProps';
import '../styles/Keyboard.css';
function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyProps) {
  return (
    <div className="key-container">
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button 
           onClick={() => addGuessedLetter(key)}
           className={`btn ` + `${isActive ? " active" : ""} ${isInactive ? "btn inactive" : ""}`}
           disabled={isInactive || isActive || disabled}
           key={key}>
            {key}
           </button>
        )
      })}
    </div>
  )
}

export default Keyboard
