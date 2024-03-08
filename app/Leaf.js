"use client";
import { useState } from 'react';

const Leaf = (props) => {
    const [rotation, setRotation] = useState(0);
  
    return (
       <div>
        <div style={{ height:'200px', width:'200px'}} onClick={() => setRotation(rotation + (props.disabled?1:0))}>
            <p style={{ position: 'absolute', top:'0%', width:'100%', text-align:'center'}}>
                {props.words[(0+rotation)%4]}
            </p>
            <p style={{ position: 'absolute', top:'50%', right: '15px'}}>
                {props.words[(1+rotation)%4]}
            </p>
            <p style={{ position: 'absolute', top:'100%', width:'100%', text-align:'center'}}>
                {props.words[(2+rotation)%4]}
            </p>
            <p style={{ position: 'absolute', top:'50%', right: '15px'}}>
                {props.words[(3+rotation)%4]}
            </p>
        </div>
      </div>
    );
  };

export default Leaf;