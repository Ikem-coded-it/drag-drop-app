import { ItemTypes } from "../../constants/DraggableTypes"
import StartDragElement from "./StartDragElement"

const elements = [
    {
        type: ItemTypes.BUTTON,
        name: `Draggable ${ItemTypes?.BUTTON}`
    }
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
                elements.map((elem) => (
                    <StartDragElement
                    element={elem}
                    />
                ))
            }
        </aside>
    )
}