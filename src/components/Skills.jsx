import React from 'react'
const Skills = () => {
  const style = 'flex justify-center items-center text-lg font-mono font-bold '
  const pstyle = 'font-mono text-center mt-4 mb-4'
  const pc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
  return (
    <div className=' p-8 flex justify-center items-center md:flex-row flex-col bg-[#F8F8F8] w-full'>
      <div className='mr-8'>
        <h1 className={`${style} text-lg font-mono font-bold `}>BRANDING AND IDENTITY</h1>
        <p className={`${pstyle}`}>{pc}</p>
      </div>
      <div>
        <h1 className={`${style}`}>
          WEB DEVELOPMENT 
        </h1>
        <p className={`${pstyle}`}  >{pc}</p>
      </div>
      <div>
        <h1 className={`${style}`}>SOCIAL MEDIA MARKETING</h1>
        <p className={`${pstyle}`} >{pc}</p>
      </div>
    </div>
  )
}

export default Skills
