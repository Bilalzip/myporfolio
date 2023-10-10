import React, { useState } from 'react';
import { Navelements } from '../utils/constants';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const[Open,setOpen ] = useState(false)
  return (
<>
     <div className='flex md:justify-between md:flex-row flex-col  md:items-center bg-yellow-900'>

      <img src='/src/assets/logo.png' className='md: ml-4 w-16 h-16'></img>
     <div onClick={()=>(setOpen(!Open))} className='text-3xl absolute right-9 top-6 md:hidden cursor-pointer'>
     <ion-icon name={Open ? 'close':'menu'}></ion-icon>
     </div>
      <div  className={`flex flex-col md:flex-row md:pb-[0] pb-8 md:pl-0 pl-4 ${!Open ? 'hidden' : 'block'}`}>
        {Navelements.map((item,index)=>(
          <Link key={index} to={item.link} className='md:my-0 my-7 md: mr-4 ml-4 font-sans font-bold hover:text-white ' >{item.name}</Link>
        ))}
      </div>
     </div>

</>
  );
};
export default Navbar;