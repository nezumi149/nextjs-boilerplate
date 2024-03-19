import React from 'react';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Leaf from './Leaf';


const Sortable = (props:any) => {
  const Element = props.element || 'div';
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
} = useSortable({ id: props.id });

const style = {
  transform: CSS.Transform.toString(transform),
  transition: transition || undefined,
};
  
  return (
    <Leaf
            ref={setNodeRef}
            style={style}
            withOpacity={isDragging}
            {...props}
            {...attributes}
            {...listeners}
        />
  );
}

export default Sortable;