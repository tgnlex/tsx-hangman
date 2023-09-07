import '../styles/Drawing.css';
import DrawingProps from '../types/DrawingProps'
const HEAD = (
  <div className="head"></div>
)
const BODY = (
  <div className="body"></div>
)

const LEFT_ARM = (
  <div className="left-arm"></div>
)

const RIGHT_ARM = (
  <div className="right-arm"></div>
)

const LEFT_LEG = (
  <div className="left-leg"></div>
)

const RIGHT_LEG = (
  <div className="right-leg"></div>
)

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG  ]

function Drawing({numberOfGuesses}: DrawingProps) {
  return (
    <div className="drawing-container">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="hanger"></div>
      <div className="structure-top"></div>
      <div className="structure-main"></div>
      <div className="structure-base"></div>
    </div>
  )
}

export default Drawing
