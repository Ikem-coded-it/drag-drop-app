import { ItemTypes } from "../../constants/DraggableTypes"
import StartDragElement from "./StartDragElement"

const elements = [
    ItemTypes.BUTTON
]

export default function DraggablesSidebar() {
    return(
        <aside style={{
            height: 600,
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: 20
        }}>
            {
                elements.map((elem, i) => (
                    <StartDragElement
                    key={i}
                    element={elem}
                    />
                ))
            }
        </aside>
    )
}