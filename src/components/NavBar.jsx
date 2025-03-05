import React from 'react';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  return (

    <div id='header'>
      
      <div id='logo'>
      <span>Logo</span>
      </div>

      <div id='navContainer'>
        <ul id='menu'>
          <li><a href="#" className='categorie'> Adidas </a></li>
          <li><a href="#" className='categorie'> Nike </a></li>
          <li><a href="#"><CartWidget /></a></li>

        </ul>

      </div>

      
    </div>
  )
}

export default NavBar