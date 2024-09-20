import React from 'react';
import { useDrag } from 'react-dnd';
import { useDragContext } from '../../context/DragContext';
import { useEffect } from 'react';

export default function StartDragElement({ element }) {
    const { startDrag } = useDragContext()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: element.type,
        item: { type: element.type },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    useEffect(() => {
        isDragging && startDrag(element)
    }, [isDragging])

    return (
        <div
            ref={drag}
            style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'move',
                display: 'inline-block',
                opacity: isDragging ? 0.5 : 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: 200,
                height: 50
            }}
        >
            {element.name}
        </div>
    );
}