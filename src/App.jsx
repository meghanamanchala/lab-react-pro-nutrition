import { useState } from "react";
import "./App.css";
import Foodbox from "./Component/Foodbox";
import foodData from "./resources/FoodData";
function App(){
const [serachItem,setSearchItem] = useState("")
const handleSearch = (e)=>{
  setSearchItem(e.target.value);
}
const filterdData = foodData.filter((el)=>
el.name.toLocaleLowerCase().includes(serachItem.toLocaleLowerCase()));
  return(
    <>
        <h1>Pro Nutrition</h1>
        <h2>Search</h2>
        <div className="input">
        <input 
        type="text"
        placeholder="Search an item"
        onChange={handleSearch}/>
</div>
        {filterdData.map((el,i)=>(
        <Foodbox data={el} index={i} key={i}/>
        ))}
    </>
  );
}
export default App;