import React from 'react';

const Intro = () => {
  return (
    <div className='pt-[70px]'>
      <div className='flex flex-col items-center md:flex-row md:justify-center'>
        <img 
        
          src="/src/assets/Bilal.jpg"
          alt="Your Image"
          className='md:max-h-[550px]
           mb-4 flex md:flex-row flex-col p-10 justify-center items-cente'
        />
        <div className='mb-16'>
          <h1 className=' transform uppercase  border-b-2 border-red-600 text-4xl font-bold font-mono ml-6 mb-0 felx md:flex-row flex-col justify-center items-center hover:text-slate-500'>Something about me</h1>
          <p className='ml-6 pt-4  md: flex flex-col justify-center items-center'>It is a long established fact that a reader 
          will be distracted by the readable content of a page 
          when looking at its layout.  <br />The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,  <br /> as opposed to using 'Content here, content here', making it look like readable English.</p>
       
<div className='lg: ml-6 mt-4 w-80%'>
          <p>HTML</p>
  <div class="container bg-gray-300">
    <div class="skills bg-green-500 w-9/10 rounded-lg pl-2">
      90%
    </div>
  </div>

  <p>CSS</p>
  <div class="container bg-gray-300">
    <div class="skills bg-blue-500 w-4/5 rounded-lg pl-2 hover:bg-yellow-400">
      80%
    </div>
  </div>

  <p>JavaScript</p>
  <div class="container bg-gray-300">
    <div class="skills bg-red-500 w-3/5 rounded-lg pl-2">
      65%
    </div>
  </div>

  <p>PHP</p>
  <div class="container bg-gray-300">
    <div class="skills bg-gray-800 w-3/5 rounded-lg pl-2">
      60%
    </div>
  </div>
  </div>

       {/* div of last  */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
