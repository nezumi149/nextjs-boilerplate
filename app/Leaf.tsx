"use client";
import { useState } from 'react';
import React, { forwardRef, HTMLAttributes, CSSProperties } from 'react';

export type LeafProps = HTMLAttributes<HTMLDivElement> & {
    id: string;
    withOpacity?: boolean;
    isDragging?: boolean;
    disabled?: boolean;
    words: string[];
};

> /* eslint-disable react/display-name */
const Leaf = forwardRef<HTMLDivElement, LeafProps>(({ id, withOpacity, isDragging, style, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const inlineStyles: CSSProperties = {
        opacity: withOpacity ? '0.5' : '1',
        transformOrigin: '50% 50%',
        height: '167px',
        width: '167px',
        borderRadius: '15px',
        cursor: isDragging ? 'grabbing' : 'grab',
        backgroundColor: '#DDFFDD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: isDragging  ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px' : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        margin: '6px',
        position: 'relative',
        border: 'solid',
        ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props} onClick={() => setRotation(rotation + (props.disabled?1:0))}>{id}</div>;
});

export default Leaf;

/*const Leaf = (props: any) => {
    const [rotation, setRotation] = useState(0);
  
    return (
       <div>
        <div style={{ height:'167px', width:'167px', backgroundColor:'#DDFFDD', position:'relative', border:'solid', borderRadius: '15px', borderColor: '#CCDDCC', margin: '6px'}} onClick={() => setRotation(rotation + (props.disabled?1:0))}>
            <p style={{ display:'inline-block', position: 'absolute', top:'0%', width:'100%', textAlign:'center'}}>
                {props.words[(0+rotation)%4]}
            </p>
            <p style={{ display:'inline-block', position: 'absolute', top:'50%', right: '0%', writingMode: 'vertical-lr', transform: 'translateY(-50%)'}}>
                {props.words[(1+rotation)%4]}
            </p>
            <p style={{ display:'inline-block', position: 'absolute', bottom:'0%', width:'100%', textAlign:'center',  rotate: '180deg'}}>
                {props.words[(2+rotation)%4]}
            </p>
            <p style={{ display:'inline-block', position: 'absolute', top:'50%', left: '0%', writingMode: 'vertical-lr',  transform: 'translateY(-50%) scale(-1)'}}>
                {props.words[(3+rotation)%4]}
            </p>
        </div>
      </div>
    );
  };

export default Leaf; */