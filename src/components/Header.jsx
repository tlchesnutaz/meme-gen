import React from "react"
import troll from "../assets/troll_face.png"


export default function Header() {
    return (
        <header className="header">  
            <img src={troll} className="header-image" alt="troll face"/>
            <h1 className="header-title">Meme Generator</h1>
            <h2 className="header-project">React Project</h2>
        </header>
    )
}