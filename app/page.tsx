"use client";

import { useState } from 'react';
import wordList from '@/resources/wordlist.json';
import Input from "./Input";
import Leaf from "./Leaf";
import * as _ from 'underscore';
const wordSample = _.sample(wordList, 20);

const Home = () => {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [textC, setTextC] = useState("");
  const [textD, setTextD] = useState("");

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }} className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div>
            <Input text={textA} setText={setTextA} />
            <Leaf words={wordSample.slice(0,4)} />
          </div>
          <div>
            <Input text={textB} setText={setTextB} />
            <Leaf words={wordSample.slice(4,8)} />
          </div>
          <div>
            <Input text={textC} setText={setTextC} />
            <Leaf words={wordSample.slice(8,12)} />
          </div>
          <div>
            <Input text={textD} setText={setTextD} />
            <Leaf words={wordSample.slice(12,16)} /> 
          </div>
        </div>
    </main>
  )
}

export default Home;