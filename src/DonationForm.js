import ProgressBar from "react-bootstrap/ProgressBar"
import { useState} from "react"
// import { OverlayTrigger } from "react-bootstrap"
// import Tooltip from "react-bootstrap/Tooltip"


export default function DonationForm() {
  const [amount, setAmount] = useState(0)
  const [value, setValue] = useState(0)
  const [donors, setDonors] = useState(0)
  const [isShown, setIsShown] = useState(false)
  const [remainder, setRemainder] = useState(0)
  const [goal, setGoal] = useState(0)
  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     Simple tooltip
  //   </Tooltip>
  // );
  const MessageTooltip = () => {
    return <span>{5000 - amount } still needed until we reach the goal</span>
  }


 function handleChange(event){
   setValue(parseInt(event.target.value))
 }

 function handleClick() {
   setAmount(amount + value)
   setValue(0)
   console.log(donors)
   setDonors(donors + 1)
   setGoal(5000)
  //  setRemainder(5000 - amount)
   
 }

 


  return (
    
    <div>
      <div className="form-child">
        <ProgressBar 
          now={amount} 
          max={goal}
          onMouseOver={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}/>
          {isShown && (
            <div className="pop-message">
              <p>{MessageTooltip} still needed to fund this project </p>
            </div>
          )}
          {/* <OverlayTrigger 
            placement="right"
            delay={{ show: 250, hide: 400}}
            overlay={renderTooltip}
          ></OverlayTrigger> */}
          {/* <ProgressBar now={amount} max={5000} /> */}
        {/* <div> Donation ${amount}</div> */}
        <h2>Only four days left to fund this project</h2>
        <p>join the {donors} other donors who have already supported the Project!</p>
        <input type="number" value={value} onChange={handleChange} placeholder="$5 min"/>
        <button onClick={handleClick}>Give Now</button>
      </div>
    </div>
    
   
  );
}
    
    