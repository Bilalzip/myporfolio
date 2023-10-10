import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const Mywork = () => {
  return (
    <>
    <div className='mt-4 flex flex-col justify-center items-center'
  >
  <h1 className='text-2xl font-bold font-mono '>My recent work </h1>
   <p className='text-center text-lg '>LLorem Ipsum has been the industry's standard dummy text.
</p>    
    </div>
    <Card/>
    </>
    
  )
}

export default Mywork
