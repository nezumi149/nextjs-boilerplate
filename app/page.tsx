"use client";

import { useState } from 'react';
import wordList from '@/resources/wordlist.json';
import * as _ from 'underscore'; 

const Home = () => {
  const [textbox, setText] = useState("");

  function updateText(value: string){
    setText(value);
  }

  const wordSample = _.sample(wordList, 20);

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
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          Word samples list: {wordSample}
        </div>
    </main>
  )
}

export default Home;