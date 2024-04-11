import React from "react"
import troll from "../Images/troll.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h2 className="header--project">Abhishek Shankar</h2>
        </header>
    )
}