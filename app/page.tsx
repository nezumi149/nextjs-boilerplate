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
  const [disabled, setDisabled] = useState(false);

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20}} className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div id='fourLeafOuter' style={{ fontSize: 60, fontFamily: 'aga-arabesque', color: 'gray'}}>
            <Input text={textA} setText={setTextA} disabled={disabled}/>
            <div id='fourLeafInner'style={{ height:'339px', width:'339px', position:'relative'}}>
            <Leaf words={wordSample.slice(0,4)}  disabled={disabled} style={{ position: 'absolute', top:0, left: 0}}/>
            <Leaf words={wordSample.slice(4,8)}  disabled={disabled} style={{ position: 'absolute', top:0, right: 0}}/>
            <Leaf words={wordSample.slice(8,12)}  disabled={disabled} style={{ position: 'absolute', bottom:0, right: 0}}/>
            <Leaf words={wordSample.slice(12,16)}  disabled={disabled} style={{ position: 'absolute', bottom:0, left: 0}}/> 
            </div>
          </div>
        </div>
        <button onClick={() => setDisabled(!disabled)}>
          {disabled ? "Unlock" : "Submit"}
        </button>
    </main>
  )
}

export default Home;