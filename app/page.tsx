"use client";

import { useState } from 'react';
import wordList from '@/resources/wordlist.json';
import Input from "./Input";
import * as _ from 'underscore';
const wordSample = _.sample(wordList, 20);

const Home = () => {
  const [textbox, setText] = useState("");

  function updateText(value: string){
    setText(value);
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Input text={textbox} setText={setText} />
          <button onClick={() => setText("")}>
            Clear Text 
          </button>
          <p>
            The current state is: {textbox}
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