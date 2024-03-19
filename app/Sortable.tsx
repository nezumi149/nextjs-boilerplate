import React from 'react';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


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
    <Element ref={setNodeRef} style={style} withOpacity={isDragging} {...listeners} {...attributes}>
      {props.children}
    </Element>
  );
}

export default Sortable;