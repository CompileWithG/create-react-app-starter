
import React from 'react'
import Message from './Message'
import Send from './Send';
export default function ChatForm({message,text,setText,setMessage}) {
  const changetext=(event)=>{
    setText(event.target.value);
}
const changeMessage=()=>{
  setMessage([...message,text]);
  setText("");
}
  return (
    <>
     <div className='grid bg-gray-400/70 justify-center h-10  w-auto'>
       <div className='bg-green-600 sm:w-96 flex items-center mt-64 justify-center rounded-bl-lg rounded-tr-lg hover:underline '>
      This is a recieved message.
       </div>
    </div>
    <div className='bg-gray-400/70 w-full h-96'>
    </div>
    <div className='h-28 bg-gray-400/70 grid'>
    {message.map((element,index)=>{
        return <Message text={element} key={index}/>
    })}
    </div>
    <div className='flex rounded-lg bg-gray-400'>
      <textarea  className=" input bg-slate-100 border-stone-500 px-5  h-20 text-lg w-full" value={text} placeholder='Type your message...' rows="3"  onChange={changetext}>
      </textarea>
      <button className='bg-slate-100 hover:cursor-pointer' onClick={changeMessage} ><Send/></button>
    </div>
    </>
  )
}
