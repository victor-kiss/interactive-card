"use client"
import React from "react";
import Image from "next/image";

export default function Home() {
  const [name,setName] = React.useState('Your Name')
  const [color,setColor] = React.useState('#e27396')
  const [mousePosition, setMousePosition] = React.useState({
    x:10,
    y:25

  })

  const handleName = ((event: { target: { value: React.SetStateAction<string>; }; }) =>{
      event.target.value == "" ? setName("Your Name") :setName(event.target.value);
  })

   
  const cardNumber = "1101 2203 3743 8832"

  const changeView = (() =>{
    const frontCard = document.querySelector("div.front-card")
    const backCard = document.querySelector("div.front-card")
    if(frontCard !=null && backCard != null){
      frontCard.classList.toggle('visible')
      backCard.classList.toggle("not-visible")
    }
  })

  return (
    <div className="wrapper">
      <div className="grid-wrapper">
        <div className="front-card" style={{backgroundColor:color}}>
          <div className="black-area"></div>
          <div className="card-content">
            <div className="chip-area">
              <Image src="/chip.png" width={86} height={86} alt="card chip"/>
              <Image src="/mc_symbol.svg" width={86} height={86} alt="mc symbol"/>
            </div>
              <div className="user-area">
                <span className="username">{name}</span>
            </div>
          </div>
        </div>
        <div className="back-card" style={{backgroundColor:color}}  id="card">
          <div className="card-content">
            <div className="wifi-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="#FFF" className="bi bi-wifi-2" viewBox="0 0 16 16">
            <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"/>
            </svg>
           
            </div>
            <div className="user-area">
              <span className="card-number">{cardNumber}</span>
            </div>
          </div>
          <div className="black-area"></div>
        </div>
        <div className="user-data">
          <label htmlFor="user-name">Your name:</label>
          <input type="text" name="user-name" id="user-name" onChange={handleName} maxLength={20} placeholder="ex: victor"/>
          <div className="card-color">
            <span>Card Color</span>
              <button type="button"  id="btn-color1" onClick={() => setColor('#e27396')}></button>
              <button type="button" id="btn-color2"  onClick={() => setColor("#3aa6b9")}></button>
              <button type="button"  id="btn-color3"  onClick={() => setColor("#f86703")}></button>
              <button type="button"  id="btn-color4"  onClick={() => setColor("#A0C49D")}></button>
          </div>
          <div className="card-view">
              <button type="button" id="change-view" onClick={changeView}>Change View</button>
          </div>
        </div>
      </div>
    </div>
  )
}
