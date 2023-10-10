import React from 'react';
import { mydata } from '../utils/constants';

const Card = () => {
  return (
    <div className='flex flex-wrap'>
      {mydata.map((item, index) => (
        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2'>
          <div className='mx-auto text-center'>
            <img
              className='h-96 w-96 mt-4 rounded-md shadow-md shadow-black hover:shadow-green-400 overflow-auto border-2 border-white'
              src={item.src}
              alt={item.name}
            />
            <a href='/'>
              <h1 className='relative bottom-80 text-white text-2xl font-mono font-bold '>
                {item.title}
              </h1>
            </a>
            <div className='relative bottom-24 rounded-lg'>
              <button className='bg-blue-700 p-2 rounded-md hover:bg-white shadow-md shadow-white text-white font-bold font-mono hover:text-black'>
                View Live
              </button>
              <button className='ml-8 bg-blue-700 p-2 rounded-md hover:bg-white shadow-md shadow-white text-white font-bold font-mono hover:text-black'>
                View Github
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
