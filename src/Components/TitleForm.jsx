import React from "react";
import './Styles/TitleForm.css'

export default function TitleForm(props) {
    const { title } = props
    const deleteRoomFormhandler = () => {
        props.onDeleteRoom()
    }
    return (
        <React.Fragment>
            <div className="titleFormContainer">
                <span className="titleForm">{title}</span>
                <span onClick={deleteRoomFormhandler}>
                    <ion-icon id="closeButton" name="close-circle-outline"></ion-icon>
                </span>
            </div>
        </React.Fragment>
    )
}