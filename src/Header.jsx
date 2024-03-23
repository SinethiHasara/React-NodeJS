import React from "react"

function Header() {
    return(
        <div className="header-cls">
            <img src="src\logo192.png" alt="" />
            <h1>React</h1>
            <div className="nav-items">
                <a href="#">About</a>
                <a href="#">Documentation</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Header