import React from "react";
import TitleForm from "./TitleForm";
import './Styles/RoomForm.css'
import FullInput from "./FullInput";

export default function RoomForm(props) {
    const { roomNumber } = props
    const deleteRoom = () => {
        props.onDeleteRoom()
    }
    return (
        <React.Fragment>
            <form >
                <TitleForm title={`Room ${roomNumber}`} onDeleteRoom={deleteRoom} />
                <div className="inputsContainer">
                    <FullInput label="Adults" />
                    <FullInput label="Childrens" />
                </div>
            </form>
        </React.Fragment>
    )
}