<!-- import React from "react"
export default function Meme(props) {
    const {topText, bottomText, randomImage} = props
    return (     
        <div className="meme-list">
            <img src={randomImage} alt="new img" className="meme-image" />
            <h2 className="meme-text top">{topText}</h2>
            <h2 className="meme-text bottom">{bottomText}</h2>
        </div>    
    )
} -->

useEffect takes a function as its parameter. 
If that function returns something, it needs to be a cleanup function. Otherwise, it should return nothing. 
If we make it an async function, it automatically returns a promise instead of a function or nothing. 
Therefore, if you want to use async operations inside of useEffect, you need to define the function 
separately inside of the callback function, as seen below:

<!-- React.useEffect(() => {
      async function getMemes() {
          const res = await fetch("https://api.imgflip.com/get_memes")
          const data = await res.json()
          setAllMemes(data.data.memes)
      }
      getMemes()
          return () => {
                
          }  this return is where the cleanup function would go, but we don't need one for this project
  }, []) -->

/** Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way. */

/** Challenge: 
* 1. Set up the text inputs to save to the `topText` and `bottomText` 
* state variables.
* 2. Replace the hard-coded text on the image with the text being saved 
* to state. */

/** Challenge: 
 * As soon as the Meme component loads the first time,
 * make an API call to "https://api.imgflip.com/get_memes".
 * 
 * When the data comes in, save just the memes array part
 * of that data to the `allMemes` state
 * 
 * Think about if there are any dependencies that, if they
 * changed, you'd want to cause to re-run this function.
 * 
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` blocks to resolve the promises
 * from using `fetch`. We'll learn why after this challenge. */

/* Add a submit button to the form
* Create a state called memeList that will be an array of the users submitted memes
* Render the memeList on the page under the form and random image */