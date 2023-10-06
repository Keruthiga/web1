import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='container head-cont mt-3'>
        <h5 className='headText'>Sellerlist</h5>
        <div className='buttontext'>
            <button className='btn btn-outline-dark signupbtn'>Sign up</button>
            <button className='btn btn-dark loginbtn'>log in</button>
        </div>
    </div>
  )
}

export default Header