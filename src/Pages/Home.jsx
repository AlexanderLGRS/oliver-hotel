import React from "react";
import { Link } from "react-router-dom";
import './Styles/Home.css'

export default function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <button className="btn mainBtn btn-dark">
                    <Link to="/OliversHotel/roomManager">Select rooms</Link>
                </button>
            </div>
        </React.Fragment>
    )
}