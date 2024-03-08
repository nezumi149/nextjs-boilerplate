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
    <main className="flex min-h-screen flex-col items-center justify-between p-24"><div id='fourLeafOuter' style={{ fontSize: 20, fontFamily: 'aga-arabesque', color: 'gray'}}>
        <Input text={textA} setText={setTextA} disabled={disabled}/>
          <div id='fourLeafInner'style={{ height:'360px', width:'360px', position:'relative'}}>
            <div style={{height:'179px', width:'179px', position: 'absolute', top:0, left: 0}}>
              <Leaf words={wordSample.slice(0,4)}  disabled={disabled}/>
            </div>
            <div style={{height:'179px', width:'179px', position: 'absolute', top:0, right: 0}}>
              <Leaf words={wordSample.slice(4,8)}  disabled={disabled}/>
            </div>
            <div style={{height:'179px', width:'179px', position: 'absolute', bottom:0, right: 0}}>
              <Leaf words={wordSample.slice(8,12)} disabled={disabled}/>
            </div>
            <div style={{height:'179px', width:'179px', position: 'absolute', bottom:0, left: 0}}>
              <Leaf words={wordSample.slice(12,16)} disabled={disabled}/>
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