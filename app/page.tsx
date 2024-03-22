"use client";

import { useState, useCallback }from 'react';
import React from 'react';
import * as _ from 'underscore';
import {
  DndContext,
  closestCenter,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  PointerSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSwappingStrategy } from '@dnd-kit/sortable';

import wordList from '@/resources/wordlist.json';
import cw from '@/resources/clockwise.png';
import ccw from '@/resources/counterclockwise.png';
import Image from 'next/image';

import Input from "./Input";
import Leaf from "./Leaf";
import Sortable from "./Sortable";

const wordSample = _.sample(wordList, 20).concat(Array(16).fill(""));
const shuffle = (arr:string[]):string[] => (
  arr
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
);

const getRandomInt = (max:number):number => (
  Math.floor(Math.random() * max)
)


const Home = () => {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [textC, setTextC] = useState("");
  const [textD, setTextD] = useState("");
  const textsRotation = [textA,textB,textC,textD];
  const setterRotation = [setTextA,setTextB,setTextC,setTextD];
  const [rotationA, setRotationA] = useState(getRandomInt(4));
  const [rotationB, setRotationB] = useState(getRandomInt(4));
  const [rotationC, setRotationC] = useState(getRandomInt(4));
  const [rotationD, setRotationD] = useState(getRandomInt(4));
  const [rotationE, setRotationE] = useState(0);
  const [rotationF, setRotationF] = useState(0);
  const [dummy, setDummy] = useState(0);
  const leafRotation:any[] = [rotationA, rotationB, rotationC, rotationD, rotationE, rotationF, rotationF, rotationF, rotationF];
  const leafSetterRotation:any[] = [setRotationA, setRotationB, setRotationC, setRotationD, setRotationE, setRotationF, rotationF, rotationF, rotationF];

  const [activeId, setActiveId] = useState<string | null>(null);
  const numberStringArray = Array.from({ length: 9 }, (_, i) => (i).toString());
  const [items, setItems] = useState(shuffle(numberStringArray.slice(0,5)).concat(numberStringArray.slice(5)));
  const [rotation, setRotation] = useState(0); //rotation should be between 0 and 3 inclusive
  const [disabled, setDisabled] = useState(false);
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 0.01
    }
  })
  const sensors = useSensors(pointerSensor, useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id.toString());
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
        setItems((items:string[]):string[] => {
            const oldIndex = items.findIndex((item) => item === active.id);
            const newIndex = items.findIndex((item) => item  === over!.id);
            const newArray = Array.from(items);
            const temp = items[oldIndex];
            newArray[oldIndex] = items[newIndex];
            newArray[newIndex] = temp;

            return newArray;
        });
    }

    setActiveId(null);
  }, []);

  const handleRotate = (increment:number) => {
    setRotation((rotation + increment) % 4);
    [5,6,7,8].forEach((i) =>{
      const a = parseInt(items[i]);
      leafSetterRotation[a]((leafRotation[a]+4-increment)%4);
    });
  };

  const lowerLeafStyle = (index:number):React.CSSProperties => ({
    top: '0px',
    left: (index*179).toString().concat('px'),
    position: 'absolute'
  });

  const leaf = (item:string) => (
    <Sortable
      key={item}
      id={item}
      words={wordSample.slice(parseInt(item)*4,parseInt(item)*4+4)} 
      disabled={disabled}
      leafRotation={leafRotation[parseInt(item)]}
      setLeafRotation={leafSetterRotation[parseInt(item)]}
      />
  );

  const upperLeaf = (index:number) => (
    <Leaf
     id ={wordSample[index*4]}
     words={wordSample.slice(index*4,index*4+4)} 
     disabled={disabled}
     leafRotation={dummy}
     setLeafRotation={setDummy}/>
  )

  const leafList = items.slice(0,5).map((item:string, index:number) => (
    <div key={item} style={lowerLeafStyle(index)}>{leaf(item)}</div>
  ));

  const fourLeafInnerStyle: React.CSSProperties = {
    height: '360px',
    width: '360px',
    position: 'relative',
    left: '40px', // could be margin: auto?
    // rotate: (90*rotation).toString().concat('deg') rotates entire clover
  }

  const rightInputStyle: React.CSSProperties = {
    top: '50%',
    transform: 'translateY(-50%) translateX(50%) rotate(90deg) translateY(50%)',
    position: 'absolute',
    right: '0px'
  }

  const bottomInputStyle: React.CSSProperties = {
    rotate: '180deg',
    bottom : '12px',
    left: '25%',
    position: 'absolute'
  }

  const leftInputStyle: React.CSSProperties = {
    left : '0px',
    top: '50%',
    transform: 'translateY(-50%) translateX(-50%) rotate(270deg) translateY(50%)',
    position: 'absolute'
  }

  const greyInputStyle: React.CSSProperties = {
    width: '249px',
    margin: 'auto',
  }

  const borderStyle:  React.CSSProperties = {
    border: '#AAAAAA 2px solid',
    borderRadius: '15px'
  }

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ fontSize: 20, fontFamily: 'aga-arabesque', color: 'gray'}}>
      <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragCancel={handleDragCancel}
        >
      <div id='fourLeafOuter' style={{ height: '440px', width: '440px', position: 'absolute' }}>
        <Input text={textsRotation[rotation]} setText={setterRotation[rotation]} disabled={disabled} styling={{...greyInputStyle}}/>
        <Input text={textsRotation[(rotation + 3) % 4]} setText={setterRotation[rotation]} disabled='true'  styling={{...rightInputStyle, ...greyInputStyle, ...borderStyle}}/>
        <Input text={textsRotation[(rotation + 2) % 4]} setText={setterRotation[rotation]} disabled='true' styling={{...bottomInputStyle, ...greyInputStyle, ...borderStyle}}/>
        <Input text={textsRotation[(rotation + 1) % 4]} setText={setterRotation[rotation]} disabled='true' styling={{...leftInputStyle, ...greyInputStyle, ...borderStyle}}/>
        <div id='fourLeafInner' style={fourLeafInnerStyle}>
          <SortableContext items={items} strategy={rectSwappingStrategy} id="fourLeafSortableContext">
            <div key={items[5+rotation]} style={{height:'179px', width:'179px', position: 'absolute', top:0, left: 0}}>
              {disabled?leaf(items[5+rotation]):upperLeaf(0)}
            </div>
            <div key={items[5+(rotation+1)%4]} style={{height:'179px', width:'179px', position: 'absolute', top:0, right: 0}}>
              {disabled?leaf(items[5+(rotation+1)%4]):upperLeaf(1)}
            </div>
            <div key={items[5+(rotation+2)%4]} style={{height:'179px', width:'179px', position: 'absolute', bottom:0, right: 0}}>
              {disabled?leaf(items[5+(rotation+2)%4]):upperLeaf(2)}
            </div>
            <div key={items[5+(rotation+3)%4]} style={{height:'179px', width:'179px', position: 'absolute', bottom:0, left: 0}}>
              {disabled?leaf(items[5+(rotation+3)%4]):upperLeaf(3)}
            </div>
            </SortableContext>
        </div>
        <button style={{top:'0px', left:'0px', width:'30px', position: 'absolute'}}>
          <Image width={30} height = {30} alt="counterclockwise" src={ccw} onClick={handleRotate(3)} />
        </button>
        <button onClick={() => setDisabled(!disabled)} style={{bottom: '-20px', margin: 'auto', position: 'absolute'}}>
          {disabled ? "Unlock" : "Submit"}
        </button>
        <button style={{top:'0px', right:'0px', width:'30px', position: 'absolute'}}>
          <Image width={30} height = {30} alt="clockwise" src={cw} onClick={handleRotate(1)} />
        </button>
      </div>
      <div id='lowerLeafPanel' style={{height: '179px', width: '895px', position: 'absolute', opacity: '0.6', backgroundColor: '#DDDDDD', bottom:'0px'}}>
          <SortableContext items={items} strategy={rectSwappingStrategy} id="lowerPanelSortableContext">
            <div style={{display: disabled?'inline':'none'}}>
              {leafList}
            </div>
          </SortableContext>
      </div>
      </DndContext>
        <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
          {activeId ? <Leaf id={activeId} isDragging words={wordSample.slice(parseInt(activeId)*4,parseInt(activeId)*4+4)} leafRotation={leafRotation[parseInt(activeId)]} setLeafRotation={leafSetterRotation[parseInt(activeId)]} /> : null}
        </DragOverlay>
    </main>
  )
}

export default Home;