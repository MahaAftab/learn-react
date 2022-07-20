import React, { Component, useState } from 'react';
import App from '../App';
import "./countButton.css"
const CountButton = (props) => {

    const [CurrentCount, setCurrentCount] = useState(50);


    const handleClick = () => {
        setCurrentCount(CurrentCount + props.incrementBy)
    }


    // a prop is a value that you pass into the Component which the Component will use to inform what it does
    // console.log(props.incrementBy)


// styling the props
 const buttonStyles = {
    background: props.buttonColor,
    border: "1px solid black",
    borderRadius: "10px"
 }   

    return (
        <div>
            countButton
            <br></br>
            <button onClick={handleClick} style={buttonStyles}>+{props.incrementBy}</button>
            <div className='countDisplay'>{CurrentCount}</div>
        </div>
    )
}


export default CountButton;

// PUT THIS CODE IN App.JS OR WHEREVER YOU WANT TO RENDER IT
    {/* using props here, to increment by whatever number we provide */}
    {/* <CountButton incrementBy={1} buttonColor={"blue"}/> 
    {/* both counts are independent of each ither */}
    {/* <CountButton incrementBy={5} buttonColor={"yellow"}/> 
    <CountButton incrementBy={7} buttonColor={"green"}/>  } */}