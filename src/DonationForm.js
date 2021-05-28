import ProgressBar from "react-bootstrap/ProgressBar"
import { useState} from "react"

export default function DonationForm() {
  const [amount, setAmount] = useState(0)
  const [value, setValue] = useState(0)
  const [donors, setDonors] = useState(0)


 function handleChange(event){
   setValue(parseInt(event.target.value))
 }

 function handleClick() {
   setAmount(amount + value)
   setValue(0)
   console.log(donors)
   setDonors(donors + 1)
 }



  return (
    
    <div>
      <div className="form-child">
        <ProgressBar now={amount} max={5000}/>
        <div> Donation ${amount}</div>
        <h2>Only four days left to fund this project</h2>
        <p>join the {donors} other donors who have already supported the Project!</p>
        <input type="number" value={value} onChange={handleChange}/>
        <button onClick={handleClick}>Give Now</button>
      </div>
    </div>
    
   
  );
}
    
    