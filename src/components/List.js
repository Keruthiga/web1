import React from 'react'
import pic1 from '../listimg1.jpg'
import pic2 from '../listimg2.jpg'
import pic3 from '../listimg3.jpg'
import pic4 from '../listimg4.jpg'
import pic5 from '../listimg5.jpg'
import {FcPrevious, FcNext} from 'react-icons/fc'
import './Header.css'

function List() {
  return (
    <div className='container list-cont mt-3'>
      <div className='listhead'>
        <h6 className='listtext'>Listed recently</h6>
        <div className='listicon'>
          <FcPrevious className='listicon'/>
          <FcNext className='listicon'/>
        </div>
      </div>
      <div className='listItem mt-2'>
        <img src={pic1} alt='...' className='listimg'/>
        <img src={pic2} alt='...' className='listimg'/>
        <img src={pic3} alt='...' className='listimg'/>
        <img src={pic4} alt='...' className='listimg'/>
        <img src={pic5} alt='...' className='listimg'/>
      </div>
    </div>
  )
}

export default List