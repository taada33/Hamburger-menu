import React from 'react'
import { useState } from 'react'

const Menu = () => {

    const [hidden, setHidden] = useState(false)

    const click = (e) => {
        // e.stopPropagation();
        setHidden(true)
    }

    const closeMenu = (e) => {
        setHidden(false);
    }

    const pageChange = (e) => {
        e.stopPropagation()
        console.log(e.target.innerHTML.split(' ')[0])
    }

    const test = (e) => {
        console.log(e.target)
    }

  return (
    <div className='menu' tabIndex="0" onFocus={click} onBlur={closeMenu}>
        {!hidden && 
        <div className='hamburger'>
            <hr></hr>
            <hr></hr>
            <hr></hr>
        </div>}

        {hidden && 
        <div className='dropdown' >
            <ul>
                <li onClick={pageChange}>About <hr></hr></li>
                <li onClick={pageChange}>Portfolio <hr></hr></li>
                <li onClick={pageChange}>Contact <hr></hr></li>
                <li onClick={pageChange}>Resume <hr></hr></li>
            </ul>    
        </div>}
    </div>
  )
}

export default Menu