import React from 'react'
import { useState } from 'react'

const Menu = () => {

    const [hidden, setHidden] = useState(false);

    const click = () => {
        setHidden(true);
    }

    const closeMenu = () => {
        if(document.hasFocus()){
            setHidden(false);
        }
    }

    const pageChange = (e) => {
        console.log(e.target.innerHTML.split(' ')[0]);
    }

  return (
    <div className='menu' tabIndex="0" onClick={click} onBlur={closeMenu}>
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

export default Menu;