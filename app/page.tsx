"use client";

import { useState } from 'react';
import wordList from '@/resources/wordlist.json';
import Input from "./Input";
import * as _ from 'underscore';
const wordSample = _.sample(wordList, 20);

const Home = () => {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [textC, setTextC] = useState("");
  const [textD, setTextD] = useState("");

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }} className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div>
            <Input text={textA} setText={setTextA} />
            <p>
              Words: {wordSample[0]} {wordSample[1]} {wordSample[2]} {wordSample[3]}   
            </p>
          </div>
          <div>
            <Input text={textB} setText={setTextB} />
          </div>
          <div>
            <Input text={textC} setText={setTextC} />
          </div>
          <div>
            <Input text={textD} setText={setTextD} />
          </div>
        </div>
    </main>
  )
}

export default Home;