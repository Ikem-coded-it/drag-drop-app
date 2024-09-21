import { ItemTypes } from "../../constants/DraggableTypes";
import DraggableButton from "./Elements/DraggableButton";

export default function DynamicElement({ type, key }) {
    switch (type) {
        case ItemTypes.BUTTON.type:
            return (<DraggableButton key={key}/>);
    
        default:
            break;
    }
}