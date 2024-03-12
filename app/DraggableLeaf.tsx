import React from 'react';
import Leaf from "./Leaf";
import {useDraggable} from '@dnd-kit/core';

const DraggableLeaf = (props:any) => {
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: props.id,
  });
  
  return (
    <Leaf ref={setNodeRef} {...attributes} {...listeners} words = {props.words} disabled = {props.disabled}/>
  )
};

export default DraggableLeaf;