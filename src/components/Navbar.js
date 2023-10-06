import React from 'react';
import './Header.css';
import {FaShoppingCart} from "react-icons/fa" 

function Navbar() {

  return (
    <div className='container nav-con'>
        
        <nav className="navbar navbar-expand-lg  pl-0">
            <div className="nav-items">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="ww">Womenswear</a></li>
                    <li className="nav-item"><a className="nav-link" href="mw">Menswear</a></li>
                    <li className="nav-item"><a className="nav-link" href="kw">Kidswear</a></li>
                    <li className="nav-item"><a className="nav-link" href="bt">Beauty</a></li>
                    <li className="nav-item"><a className="nav-link" href="hb">Hobbies</a></li>
                    <li className="nav-item"><a className="nav-link" href='hw'>Homeware</a></li>
                </ul>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light pl-0 cart-items" >
            <ul className='navbar-nav'>
                <li className='nav-item mr-2'><button className='sellbtn'>Sell items</button></li>
                <div className='nav-item'><FaShoppingCart style={{fontSize:'25px',display:'flex'}}/></div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar