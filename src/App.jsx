import './App.css'
import MyGrid from './components/Grid';
import DragProvider from './context/DragContext';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';
import DraggablesSidebar from './components/Draggables/DraggablesSidebar';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragProvider>
        <div>
          <MyGrid/>
          <DraggablesSidebar/>
        </div>
      </DragProvider>
    </DndProvider>
  )
}

export default App
