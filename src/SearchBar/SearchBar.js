import React, { useState } from "react";
import "./SearchBar.css"
import '../App'
    

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState("Pret")
    //above is a piece of state
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearBtn = ()=>{
        setSearchValue("")
    } 
   
    const shouldDisplayBtn = searchValue.length > 0
    // alert(shouldDisplayBtn)


    // const person = {
    //     name: 'Maha'
    // }
    // const newPerson = {
    //     ...person,
    //     age: 28
    // }
    // console.log(newPerson)
    const filteredProduct = props.searchItems.filter((product) =>{
            return product.includes(searchValue);
        })
    

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleChange} />
            {/* //shortcircuiting or conditional rendering */}
            {shouldDisplayBtn && <button onClick={handleClearBtn}>clear</button>}
            {/* if this is true then this will render out */}


            <br/>
            {searchValue}
            <ul>
            {/* key is used in react in order to ientify the item on the list */}
            {filteredProduct.map((product)=>{
            return <li key={product}>{product}</li>
            })
        }
            </ul>
           {/* USING FILTER FUNCTION */}
            

        </div>
    )
}
export default SearchBar

//MAP FUNCTION 0 WILL ALLOW US TO TAKE ALL OF THE ELEMENTS IN THE ARRAY AND MA THEM INTO ELEMENTS OF DIFFERENT ARRAY