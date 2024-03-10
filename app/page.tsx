"use client";

import { useState }from 'react';
import React from 'react';
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

  const fourLeafInnerStyle: React.CSSProperties = {
    height: '360px',
    width: '360px',
    position: 'relative',
    left: '40px', // could be margin: auto?
    rotate: (90*rotation).toString().concat('deg') // rotates entire clover
  }

  const rightInputStyle: React.CSSProperties = {
    rotate: '90deg',
    top: '50%',
    transform: 'translateY(-301px) translateX(-65px)',
    position: 'absolute'
  }

  const bottomInputStyle: React.CSSProperties = {
    rotate: '180deg',
    bottom : '0px',
    transform: 'translateY(178px) translateX(-98px)',
    position: 'absolute'
  }

  const leftInputStyle: React.CSSProperties = {
    rotate: '270deg',
    left : '0px',
    top: '50%',
    transform: 'translateY(31px) translateX(63px)',
    position: 'absolute'
  }

  const greyInputStyle: React.CSSProperties = {
    width: '249px',
    margin: 'auto',
    paddingBottom: '10px',
  }

  const borderStyle:  React.CSSProperties = {
    border: '#AAAAAA 2px solid',
    borderRadius: '15px'
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id='fourLeafOuter' style={{ fontSize: 20, fontFamily: 'aga-arabesque', color: 'gray', height: '440px', width: '440px'}}>
        <Input text={textsRotation[rotation]} setText={setterRotation[rotation]} disabled={disabled} styling={{...greyInputStyle}}/>
        <Input text={textsRotation[(rotation + 3) % 4]} setText={setterRotation[rotation]} disabled='true'  styling={{...rightInputStyle, ...greyInputStyle, ...borderStyle}}/>
        <Input text={textsRotation[(rotation + 2) % 4]} setText={setterRotation[rotation]} disabled='true' styling={{...bottomInputStyle, ...greyInputStyle, ...borderStyle}}/>
        <Input text={textsRotation[(rotation + 1) % 4]} setText={setterRotation[rotation]} disabled='true' styling={{...leftInputStyle, ...greyInputStyle, ...borderStyle}}/>
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
          Rotate Clockwise
        </button>
        <button onClick={() => setDisabled(!disabled)}>
          {disabled ? "Unlock" : "Submit"}
        </button>
        <button onClick={() => setRotation((rotation + 3) % 4)}>
          Rotate Counterclockwise
        </button>
    </main>
  )
}

export default Home;