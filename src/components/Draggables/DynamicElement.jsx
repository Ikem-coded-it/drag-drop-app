import { ItemTypes } from "../../constants/DraggableTypes";
import DraggableButton from "./Elements/DraggableButton";

export default function DynamicElement({ type }) {
    switch (type) {
        case ItemTypes.BUTTON:
            return (<DraggableButton/>);
    
        default:
            break;
    }
}