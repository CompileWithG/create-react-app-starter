import React, { useState } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Send from './components/Send';

function App() {
  const [messages, setMessages] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');

  const handleButtonClick = () => {
    setMessages([...messages, textareaValue]);
    setTextareaValue(''); // Clear textarea after adding
  };

  return (
    < >
    <div className='bg-gray-400/70'>
    <div className='h-10'>
    <Header/>
    </div>
    <div className=' w-full  mt-28 mb-10 overflow-auto h-60'>
    <div className='grid m-10  justify-center h-5 w-auto'>
    <div className='bg-green-400  w-auto sm:w-96 flex items-center justify-center rounded-bl-lg rounded-tr-lg hover:underline '>
      This is a recieved message
    </div>
    </div>
        {messages.map((message, index) => (
          <Message key={index} text={message}/>
        ))}
      </div>
      <div className='bg-slate-100 h-48'>
      <input placeholder='Type your message...' className="input bg-slate-100 border-stone-500 px-5  h-20 text-lg w-5/6"value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} />
      <div className=' flex  align-top justify-end'>
      <button className=' bg-slate-100 hover:cursor-pointer h-20 w-1/6' onClick={handleButtonClick}><Send/></button>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;