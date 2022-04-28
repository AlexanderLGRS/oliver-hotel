import React, { useEffect, useState } from "react";
import RoomForm from "../Components/RoomForm";
import './Styles/RoomManager.css'
var rooms = [1]
export default function RoomManager() {
    const [roomsList, setRoomsList] = useState(rooms)
    const [modifier, setModifier] = useState(1)

    useEffect(() => {
        setRoomsList(rooms)
    }, [modifier])
    const addRoomHandler = () => {
        if (rooms.length < 5) {
            rooms.push(roomsList.length + 1)
        }
        setModifier(roomsList.length + 1)
    }
    const deleteRoom = () => {
        if (rooms.length > 1) {
            rooms.pop()
        }
        setModifier(roomsList.length + 1)
    }

    return (
        <React.Fragment>
            <div className="sectionContainer"> 
                <div className="titleSectionContainer">
                    <span>Who is staying?</span>
                </div>
                <div className="formContainer">
                    {roomsList.map((room) =>
                        <RoomForm key={room} roomNumber={room} onDeleteRoom={deleteRoom} />
                    )}
                </div>
                {modifier != 6 && <button onClick={addRoomHandler} className="btn btn-primary" >
                    <ion-icon name="add-outline"></ion-icon>
                    Add room
                </button>}
            </div>
        </React.Fragment>
    )
}