import React from 'react'
import "./Button.scss"


const Button = ({type, text, color, isoutlined, onClick}) => {
  return (
    <>
        <button className={`button ${color} ${isoutlined && "isoutlined"}`} onClick={onClick} type={type}>{text}</button>
    </>
  )
}

export default Button