import "./App.css";
import "./DonationForm.js"
// import { useState} from "react"
// import ProgressBar from "react-bootstrap/ProgressBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import DonationForm from "./DonationForm";

export default function App() {
//   const [amount, setAmount] = useState(0)
//   const [value, setValue] = useState(0)


//  function handleChange(event){
//    setValue(parseInt(event.target.value))
//  }

//  function handleClick() {
//    setAmount(amount + value)
//    setValue(0)
//  }

  return (
    
    <div className="App">
      <h1>The Good foundation</h1>
      <h2>You can donate now and help the cause!</h2>
      {/* <div class="form-wrapper">
      <div>progress bar{amount}</div>
      <ProgressBar now={amount} max={5000}/>
      <input type="number" value={value} onChange={handleChange}/>
      <button onClick={handleClick}>submit</button>
      </div> */}
      <DonationForm />
    </div>
   
  );
}
