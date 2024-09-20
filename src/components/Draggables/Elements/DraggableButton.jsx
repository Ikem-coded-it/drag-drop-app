import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../constants/DraggableTypes';

export default function DraggableButton() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BUTTON,
    item: { type: ItemTypes.BUTTON },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {

    }
  }));

  return (
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
  );
}