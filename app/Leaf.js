"use client";
import { useState } from 'react';

const Leaf = (props) => {
    const [rotation, setRotation] = useState(0);
  
    return (
      <div>
        <p>
            {props.words[(0+rotation)%4]}
            {props.words[(1+rotation)%4]}
            {props.words[(2+rotation)%4]}
            {props.words[(3+rotation)%4]}
        </p>
      </div>
    );
  };

export default Input;