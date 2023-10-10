import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className='md:ml-16 ml-4 md:mt-8 mt-4 flex md:flex-row flex-col mb-24  md:text-justify text-center bg-black'>
      
      <div className='left '>
        <div>
        <h1 className=' text-2xl font-mono font-bold mb-2 text-black '>Connect with us </h1>
        <p className='text-black font-mono'></p>Hii there welcome to my siteedhii  fkpvkdsmkvv</div>
      </div>

      <div className='md:ml-10 ml-0'>
        <div className='md:flex-row flex-col'>
        <h1 className=' text-2xl font-mono font-bold mb- mt-2'>Contact Form </h1>
        <div className='mt-2'>
          <form action="/">
            
            <input className='h-16 p-2 text-black ' type="text" placeholder='Your name' /> 
            <input className='h-16 p-2 text-black ' type="text" placeholder='Email' /> <br />
            <input  className='h-36 p-2 text-black ' type="text" placeholder='Message' /> <br />
            <button className='p-2 mt-2 text-white font-mono rounded-md hover:bg-black bg-red-600' >Send</button>
            </form> </div>
        </div>
      </div>



















    </div>
    
    </>
    
  )
}

export default Footer
