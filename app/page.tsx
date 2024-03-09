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
  const [rotation, setRotation] = useState(0); //rotation should be between 0 and 3 inclusive
  const [disabled, setDisabled] = useState(false);
  const textsRotation = [textA,textB,textC,textD];
  const setterRotation = [setTextA,setTextB,setTextC,setTextD]

  const fourLeafInnerStyle = {
    height: '360px',
    width: '360px',
    position: 'relative',
    left: '40px', // could be margin: auto?
    rotate: (90*rotation).toString().concat('px') // rotates entire clover
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id='fourLeafOuter' style={{ fontSize: 20, fontFamily: 'aga-arabesque', color: 'gray', height: '440px', width: '440px'}}>
        <Input text={textsRotation[rotation]} setText={setterRotation[rotation]} disabled={disabled}/>
        <div id='fourLeafInner' style={fourLeafInnerStyle}>
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
        <button onClick={() => setRotation((rotation + 1) % 4)}>
          Rotate Counterclockwise
        </button>
        <button onClick={() => setDisabled(!disabled)}>
          {disabled ? "Unlock" : "Submit"}
        </button>
        <button onClick={() => setRotation((rotation + 3) % 4)}>
          Rotate Clockwise
        </button>
        <p>
          {textA}<br />{textB}<br />{textC}<br />{textD}<br />
        </p>
    </main>
  )
}

export default Home;