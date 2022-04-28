import React from "react";
import { Link } from "react-router-dom";
import './Styles/Home.css'
import pic1 from '../Assets/pic1.jpg'
import pic2 from '../Assets/pic2.jpg'
import pic3 from '../Assets/pic3.jpg'
import pic4 from '../Assets/pic4.jpg'
import pic5 from '../Assets/pic5.jpg'
import pic6 from '../Assets/pic6.jpg'

export default function Home() {
    return (
        <React.Fragment>
            <section class="masthead" role="img" aria-label="Image Description">
                <h1>
                    Oliver's Hotel
                </h1>
                <button className="btn mainBtn">
                    <Link to="/OliversHotel/roomManager">Select rooms</Link>
                </button>
            </section>
            {/* <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="carouselImage d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="carouselImage d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="carouselImage d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={pic4} className="carouselImage d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={pic5} className="carouselImage d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={pic6} className="carouselImage d-block w-100" alt="..."/>
                    </div>
                </div>
            </div> */}
           
        </React.Fragment>
    )
}