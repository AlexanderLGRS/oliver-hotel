import React, { useState } from "react";
import './Styles/FullInput.css'

export default function FullInput(props) {
    const { label } = props
    const [value, setValue] = useState(1)
    const lessHandler = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }
    const moreHandler = () => {
        if (value < 8) {
            setValue(value + 1)
        }

    }
    return (
        <React.Fragment>
            <label htmlFor={label}>
                {label}
                <div className="controlInputs">
                    <span onClick={lessHandler}>
                        <ion-icon id="modifierButton" name="remove-circle-outline"></ion-icon>
                    </span>
                    <input className="numberInput" type="number" value={value} id={label} readOnly max={8} />
                    <span onClick={moreHandler}>
                        <ion-icon id="modifierButton" name="add-circle-outline"></ion-icon>
                    </span>
                </div>
            </label>
        </React.Fragment>
    )
}