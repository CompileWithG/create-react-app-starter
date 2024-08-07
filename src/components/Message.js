import React from 'react'

export default function Message({text,showTime}) {
  return (
    <div className='grid m-10  justify-center h-10 w-auto'>
    <div className='bg-teal-400  w-auto sm:w-96 flex items-center justify-center rounded-bl-lg rounded-tr-lg hover:underline'>
      {text}
    </div>
    <div className='justify-end'>
    <p>{showTime}</p>
    </div>
    </div>
  )
}
