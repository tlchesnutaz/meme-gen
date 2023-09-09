import React, { useState } from "react"
import image from "../assets/image.png"
// import memesData from "../memesData"
import Draggable from "react-draggable"


export default function Meme() {
  // const [memeImg, setMemeImg] = React.useState("https://i.imgflip.com/1bij.jpg")
  
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  })
  const [allMemes, setAllMemes] = useState([]) 
  const [memeList, setMemeList] = useState([])
  const [topTextPos, setTopTextPos] = useState({x: 0, y: 0})
  const [botTextPos, setBotTextPos] = useState({x: 0, y: 0})
  
  React.useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setAllMemes(data.data.memes);
        }) 
  }, [])  
    
  function getMemeImg(event) {
    event.preventDefault()
    const memesArr = allMemes; 
    const randomNum = Math.floor(Math.random() * memesArr.length); 
    console.log(randomNum);
    const url = memesArr[randomNum].url;
    console.log(url);
    
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) { 
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    setMemeList(paramOne => [
        ...paramOne,
        { 
          topText: meme.topText, 
          topTextPos: topTextPos,
          bottomText: meme.bottomText,
          botTextPos: botTextPos,
          randomImage: meme.randomImage
        } 
      ])
    }
   
  function handleTopStop(data) {
    // console.log(data)
    setTopTextPos({ x: data.x, y: data.y })
    // console.log(topTextPos)
  }
  function handleBotStop(data) {
    setBotTextPos({ x: data.x, y: data.y })
    // console.log(botTextPos)
  }
    
  let mappedMemes = memeList.map((meme, index) => 
    <div className="meme" key={index}>
      <img src={meme.randomImage} className="meme-image" />
      <h2 className="meme-text top" style={{transform: `translate(${meme.topTextPos.x}px, ${meme.topTextPos.y}px)` }}>{meme.topText}</h2> 
      <h2 className="meme-text bottom" style={{transform: `translate(${meme.botTextPos.x}px, ${meme.botTextPos.y}px)` }}>{meme.bottomText}</h2> 
    </div>
  )
  // console.log(mappedMemes)
  // console.log(memeList)

  return (
    <main>
      <form  className="form">
        <input 
          type="text" 
          className="form-input" 
          placeholder="Top text"
          name="topText"
          value={meme.topText} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          className="form-input" 
          placeholder="Bottom text" 
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImg} className="form-button">
          Get a new meme image <img src={image} className="button-image" alt="small pic image" />
        </button>
        <button onClick={handleSubmit} className="submit">Submit Meme</button>   
      </form>
      <br />
      <div className="instruction">Enter text, drag text to desired position and hit submit.</div>
      <div className="meme">
        <img src={meme.randomImage} alt="new img" className="meme-image" />
        <Draggable bounds="parent" onStop={(e, data) => handleTopStop(data)}> 
              <h2 className="meme-text top">{meme.topText}</h2>
        </Draggable>
        <Draggable bounds="parent" onStop={(e, data) => handleBotStop(data)}>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </Draggable>
      </div>

      <ul>
        {mappedMemes}  
      </ul>
    </main> 
  )
}