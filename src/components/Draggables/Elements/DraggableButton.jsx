import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../constants/DraggableTypes';

export default function DraggableButton({key}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BUTTON.type,
    item: ItemTypes.BUTTON,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div style={{padding: 5, borderWidth: 1, borderColor: 'blue'}} key={key}>
      <button
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
          borderColor: 'blue',
          borderWidth: 1,
          height:'100%',
          width:'100%'
        }}
      >
        Draggable Button
      </button>
    </div>
  );
}