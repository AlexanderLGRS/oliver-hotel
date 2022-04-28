import React from "react";
import './Styles/Layout.css'
import logo from '../Assets/Logo.jpg'

export default function Layout(props) {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" className="logo" />
                        Oliver's Hotel
                    </a>
                </div>
            </nav>
            {props.children}
            <footer className="navbar  footer">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Footer
                    </a>
                </div>
            </footer>
        </React.Fragment>
    )
}