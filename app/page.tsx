"use client";

import { useState } from 'react';
import wordList from '@/resources/wordlist.json';
import * as _ from 'underscore'; 

const Home = () => {
  const [textboxes, setText] = useState(["", "", "", ""]);

  function updateText(value: string, index: number){
    var tempText = textboxes;
    tempText[index] = value;
    setText(tempText);
  }

  const wordSample = _.sample(wordList, 20);

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <textarea value={textboxes[0]} onChange={e => updateText(e.target.value, 0)}></textarea>
          <button onClick={() => setText(["", "", "", ""])}>
            Clear Text 
          </button>
          <p>
            The current state is: {textboxes}
          </p>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">

          </p>
          Word samples list: {wordSample}
        </div>
    </main>
  )
}

export default Home;