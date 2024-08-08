import React, { useState } from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Send from "./components/Send";

function App() {
  document.body.style.backgroundColor = "white";
  const date = new Date();
  var x ="";
  if(date.getMinutes()<10){
    x="0"+date.getMinutes();
  }
  else{
    x=date.getMinutes();
  }
  var y=parseInt(date.getHours())%12;
    const showTime = y
        + ':' + x ;
  const handleKeyDown=(e)=>{
    if(e.key==="Enter"){
      handleButtonClick();
    }
  }
  const [messages, setMessages] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");

  const handleButtonClick = () => {
    const strWithoutSpaces = textareaValue.replace(/\s/g, ""); 

// Get the length of the new string
const lengthWithoutSpaces = strWithoutSpaces.length;
    if(lengthWithoutSpaces===0){
      return;
    }
    setMessages([...messages, textareaValue]);
    setTextareaValue(""); // Clear textarea after adding
  };
  const[open,setOpen]=useState(false);
  return (
    <>
      <div className="bg-gray-400/70">
        <div className="h-5">
          <Header open={open}setOpen={setOpen}/>
        </div>
        <div className=" w-full  mt-28 mb-10 overflow-auto h-64">
          <div className="grid m-10  justify-center h-5 w-auto">
            <div className="bg-green-400  w-auto sm:w-96 flex items-center justify-center rounded-bl-lg rounded-tr-lg hover:underline ">
              This is a recieved message
            </div>
            <p>{showTime}</p>
          </div>
          <div className='grid m-10  justify-center h-10 w-auto'>
    <div className='bg-teal-400  w-auto sm:w-96 flex items-center justify-center rounded-bl-lg rounded-tr-lg hover:underline'>
      This is a message sent by you.
    </div>
    <p >{showTime}</p>
    </div>
          {messages.map((message, index) => (
            <Message  showTime={showTime}key={index} text={message} />
          ))}
        </div>
        <div className="bg-white h-52 ">
          <input
            placeholder="Type your message..."
            className="input bg-white px-5  h-20 text-lg w-5/6"
            value={textareaValue} onKeyDown={handleKeyDown}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
          <div className=" flex  align-top justify-end">
            <button
              className=" bg-white hover:cursor-pointer h-20 w-1/6"
              onClick={handleButtonClick}
            >
              <Send />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
