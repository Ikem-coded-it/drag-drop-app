import styles from "./styles.module.css"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useDrop } from "react-dnd";
import { useState, useEffect } from "react";
import { useDragContext } from "../../context/DragContext";
import DynamicElement from "../Draggables/DynamicElement";
import DraggablesSidebar from "../Draggables/DraggablesSidebar";
import { ItemTypes } from "../../constants/DraggableTypes";

export default function MyGrid () {
    const [components, setComponents] = useState([])
    const [layout, setLayout] = useState([
      { i: "a", x: 0, y: 0, w: 4, h: 3 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4, minH: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ])

    const [, drop] = useDrop(() => ({
      accept: [ItemTypes.BUTTON.type],
      drop: (item) => {
        console.log("draggedItem: ",  item)
        setComponents(prev => [...prev, item])
        setLayout(prev => [...prev, ItemTypes.BUTTON.defaultLayout])
      }
    }))

    useEffect(() => {
      console.log("components: ", components)
      console.log("layout: ", layout)
    }, [components])


    return (
      <div
      className={styles.container}
      ref={drop}
      >
        <GridLayout
          className="layout "
          layout={layout}
          cols={12}
          rowHeight={20}
          width={800}
          compactType={null}
          resizeHandles={['n', 's', 'e', 'w']}
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
            components.length > 0 && components?.map((comp, i) => (
                <DynamicElement
                type={comp?.type}
                key={i}
                />
            ))
          }
        </GridLayout>
      </div>
    );
}