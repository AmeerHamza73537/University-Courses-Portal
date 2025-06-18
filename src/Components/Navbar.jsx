import "./NavbarStyle.css"
import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon for icons
import { Link } from "react-router-dom"; // Importing Link from react-router-dom to use for navigation
import { MenuItems } from "./MenuItems";
// What is a State??????
// State is an object that holds the component's dynamic data
// clicked here is a boolean that will be used to toggle the menu
class Navbar extends Component{
    state = { clicked : false }; // Initializing state with clicked set to false
    handleClick = () => { // Method to toggle the clicked state
        this.setState({clicked: !this.state.clicked})
    }
    render(){   // We are using render because we are extending the Components class, if we don't extend then we don't use render()
        return(
            <nav className="NavbarItems">   
                <h1 className="Navbar-logo">Trippy</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}
export default Navbar;
