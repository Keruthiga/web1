import React from 'react';
import pic1 from '../pic1.jpg';
import './Header.css';
import {BiRightArrowAlt, BiSearch} from 'react-icons/bi'
//import {BsArrowRightCircle} from 'react-icons/bs'

function Home() {
  return (
    <div className='container home-cont'>
      <div className="card text-white"style={{ position: 'relative', textAlign: 'center',borderRadius:'10%',padding:'0' }}>
        <img className="card-img" src={pic1} alt="Care"/>
        <div className="card-img-overlay" style={{ display: 'grid', placeItems: 'center', height: '100%',alignContent:"center" }}>
          <h3 className='card-title'>Change your wardrobe. Find exciting goods.</h3>
          <div className="card-title search-bar">
            <BiSearch className='search-icon'/>
            <input type="text" placeholder=" What are you looking for?" className="search-input" />
            <BiRightArrowAlt className='enter-icon'/>
          </div>
          <div className='mt-3 card-text'>
            <button className='btn-home'>Women's clothes</button>
            <button className='btn-home'>Beauty</button>
            <button className='btn-home'>Men's clothes</button>
            <button className='btn-home'>Kid's clothes</button>
            <button className='btn-home'>Hobbies</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Home