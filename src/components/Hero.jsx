import React from 'react'


const Hero = () => {
  return (
    <div className=" opacity-100 h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}>
        <div className=' text-white flex flex-col items-center itejustify-center relative top-[250px]'>
            <h1 className='font-extrabold text-2xl' >
                Hello, I am Mohd Bilal
            </h1>
            <p>
                A passionate front end developer 
            </p>
            <button  href="#contact" class="bg-transparent mt-3 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Hire me
</button>
        </div>
      
    </div>
  )
}

export default Hero
