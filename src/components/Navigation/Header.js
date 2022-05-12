import React, { useState } from 'react'

const Header = () => {
  const [clicked, setClicked] = useState(false)
  const handleButtonClick = () => {
    setClicked(true)
  }
  return (
    <div>
      <div>
        onClick={handleButtonClick}
        style={{ color: 'red', fontSize: '50px' }}
      </div>

      {clicked && <div>Je suis le header</div>}
    </div>
  )
}

export default Header
