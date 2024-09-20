import styles from "./styles.module.css"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useDrop } from "react-dnd";
import { useState } from "react";
import { useDragContext } from "../../context/DragContext";
import DynamicElement from "../Draggables/DynamicElement";
import DraggablesSidebar from "../Draggables/DraggablesSidebar";

export default function MyGrid () {
    const [components, setComponents] = useState([])
    const { draggedItem, endDrag } = useDragContext()

    const layout = [
      { i: "a", x: 0, y: 0, w: 4, h: 3 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, minH: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ];

    const [, drop] = useDrop(() => ({
      accept: "*",
      drop: () => {
        setComponents(prev => [...prev, draggedItem])
        endDrag()
      }
    }))

    return (
      <div
      style={{borderWidth: 1, borderColor: 'black'}} className={styles.container}
      ref={drop}
      >
        <GridLayout
          className="layout "
          layout={layout}
          cols={10}
          rowHeight={20}
          width={500}
          compactType={null}
          resizeHandles={['n', 's', 'e', 'w']}
          // breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          // useCSSTransforms={false}
        >
          <div key="a" className={styles.item}>
            <h1 style={{borderColor: 'blue', borderWidth: 1, height:'100%', width:'100%'}}>Heading</h1>
          </div>
          <div key="b" className={styles.item}>
            <input style={{borderColor: 'blue', borderWidth: 1, height:'100%', width:'100%' }}/>
          </div>
          <div key="c" className={styles.item}>
            <button style={{borderColor: 'blue', borderWidth: 1, height:'100%', width:'100%' }}>Click me</button>
          </div>

          {
            components.length > 0 && components?.map((comp) => (
              <div key="c" className={styles.item}>
                <DynamicElement
                type={comp?.type}
                />
              </div>
            ))
          }
        </GridLayout>
      </div>
    );
}