import React from 'react';
import './App.css';
import CountButton from './countButton/CountButton';
import SearchBar from './SearchBar/SearchBar';
// import ./CountButton

const App = ()=>{
  const products = [
    "tooth paste",
    "tooth brush",
    "mouth wash",
    "dental floss",
    "mouth guard"
]
const products1 = [
  "mountain bike",
  "books",
  "Laptop",
  "Desktop",
  "guard"
]
  return(
  <div>
    {/* rendering search bar */}
<SearchBar searchItems = {products}/>
<SearchBar searchItems = {products1}/>
<CountButton incrementBy={15} buttonColor="blue"/>

  </div>
  )
  }
  console.log(App)
  export default App; // this app code will be avail to other files in same folder
   
  
