"use client";

import { useState } from 'react';
import wordList from '@/resources/wordlist.json';
console.log(wordList[2]);

const Home = () => {
  const [textbox, setText] = useState("");

  function updateText(value: string){
    setText(value);
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <textarea value={textbox} onChange={e => updateText(e.target.value)}></textarea>
          <button onClick={() => setText("")}>
            Clear Text
          </button>
          <p>
            The current state is: {textbox}
          </p>
        </div>
    </main>
  )
}

export default Home;