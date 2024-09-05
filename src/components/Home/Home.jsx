import React from 'react'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
const Home = () => {
  return (
    <div className='flex w-screen h-screen '>
        <div className="left  w-1/2"><LeftSection/></div>
        <div className="right  w-1/2"><RightSection/></div>
             
    </div>
  )
}

export default Home
