/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import './Foodbox.css'
const Foodbox = (props) => {
  const { data,index } = props;

  const [amount, setAmount] = useState();

  const [qty, setQty] = useState(0);

  const handleAmount = (e) => {
    if(e.target.value>0){
    setAmount(e.target.value);
}else{
    setAmount(0);
}
  };

  const handleCheck = () => {
    setQty(amount * data.cal);
  };

  const handleReset=()=>{
    setAmount(0);
    setQty(0);
  }

  return (
    <div className="main-container">
        <div className="left-section"> 
      <img src={data.img} alt="" style={{ width: "200px",height:"160px" }} />
     <div className="food-detail"> <p>{data.name}</p>
      <p>{data.cal}</p>
      </div>
      <div className="input-section">
      <input
        type="number"
        placeholder="Enter a number"
        value={amount}
        onChange={handleAmount}
      />
      <button className="plus" onClick={handleCheck}>+</button>
      </div>
      </div>
      <div className="right-section">
      <p>
        {amount} {data.name} = {qty} Calories
      </p>
      <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default Foodbox;
