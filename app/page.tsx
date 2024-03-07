"use client";

import { useState } from 'react';

const Home = () => {
  const [textbox, setText] = useState("");

  function clickClear(){
    setText("");
  }

  function clickSetText(){
    setText("default text");
    console.log(textbox);
  }

  function updateText({value}:{value: any}){
    setText(value);
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <textarea defaultValue="" onChange={e => updateText(e.target.value)}></textarea>
          <button onClick={clickClear}>
            Clear Text
          </button>
          <button onClick={clickSetText}>
            Set Text
          </button>
        </div>
    </main>
  )
}

export default Home;