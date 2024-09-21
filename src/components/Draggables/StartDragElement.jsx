import React from 'react';
import { useDrag } from 'react-dnd';
import { useDragContext } from '../../context/DragContext';
import { useEffect } from 'react';

export default function StartDragElement({ element }) {
    const { startDrag, endDrag } = useDragContext()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: element.type,
        item: element,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: () => {
            endDrag()
        }
    }));

    useEffect(() => {
        if(isDragging) {
            console.log("dragging: ", element)
            startDrag(element)
        }
    }, [isDragging])

    return (
        <div
            ref={drag}
            style={{
                padding: 10,
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'move',
                display: 'flex',
                opacity: isDragging ? 0.5 : 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: 200,
                height: 50
            }}
        >
            {element.displayName}
        </div>
    );
}