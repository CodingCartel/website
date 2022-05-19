import React, { useState } from 'react'

const Header = () => {
  const [clicked, setClicked] = useState(false)
  const handleButtonClick = () => {
    setClicked(true)
  }
  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        my button
      </button>
      {clicked && <div>Je suis le header</div>}
    </div>
  )
}

export default Header
