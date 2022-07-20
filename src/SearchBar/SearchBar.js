import React, { useState } from "react";
import "./SearchBar.css"

const products = [
    "tooth paste",
    "tooth brush",
    "mouth wash",
    "dental floss",
    "mouth guard"
]
    

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState("Pret ")
    //above is a piece of state
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearBtn = ()=>{
        setSearchValue("")
    } 
   
    const shouldDisplayBtn = searchValue.length > 0
    // alert(shouldDisplayBtn)

    console.log(
        products.map((product)=>{
            return product.toUpperCase()
        }
    ))
    const person = {
        name: 'Maha'
    }
    const newPerson = {
        ...person,
        age: 28
    }
    console.log(newPerson)

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleChange} />
            {/* //shortcircuiting or conditional rendering */}
            {shouldDisplayBtn && <button onClick={handleClearBtn}>clear</button>}
            {/* if this is true then this will render out */}


            <br/>
            {searchValue}
            

        </div>
    )
}
export default SearchBar

//MAP FUNCTION 0 WILL ALLOW US TO TAKE ALL OF THE ELEMENTS IN THE ARRAY AND MA THEM INTO ELEMENTS OF DIFFERENT ARRAY