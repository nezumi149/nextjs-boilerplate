"use client";
import { useState } from 'react';

const Leaf = (props) => {
    const [rotation, setRotation] = useState(0);
  
    return (
       <div>
        <div style={{ height:'167px', width:'167px', backgroundColor:'#DDFFDD', position:'relative', border:'solid', borderRadius: '15px', borderColor: '#CCDDCC'}} onClick={() => setRotation(rotation + (props.disabled?1:0))}>
            <p style={{ display:'inline-block', position: 'absolute', top:'0%', width:'100%', textAlign:'center'}}>
                {props.words[(0+rotation+props.rotation)%4]}
            </p>
            <p style={{ display:'inline-block', position: 'absolute', top:'50%', right: '0%', rotate: '90deg'}}>
                {props.words[(1+rotation+props.rotation)%4]}
            </p>
            <p style={{ display:'inline-block', position: 'absolute', bottom:'0%', width:'100%', textAlign:'center',  rotate: '180deg'}}>
                {props.words[(2+rotation+props.rotation)%4]}
            </p>
            <p style={{ display:'inline-block', position: 'absolute', top:'50%', left: '0%',  rotate: '270deg'}}>
                {props.words[(3+rotation+props.rotation)%4]}
            </p>
        </div>
      </div>
    );
  };

export default Leaf;