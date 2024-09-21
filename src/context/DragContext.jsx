import React, { createContext, useContext, useState } from 'react';

const DragContext = createContext();

export default function DragProvider({ children }) {
  const [draggedItem, setDraggedItem] = useState(null);

  const startDrag = (item) => {
    console.log("setting item: ", item)
    setDraggedItem(item);
  };

  const endDrag = () => {
    setDraggedItem(null);
  };

  return (
    <DragContext.Provider value={{ draggedItem, startDrag, endDrag }}>
      {children}
    </DragContext.Provider>
  );
}

export function useDragContext() {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error('useDragContext must be used within a DragProvider');
  }
  return context;
}
