import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedBackForm(){
    

    const [text, setText]  = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("")

    const handleTextChange = (e)=>{
        // console.log(e.target.value)

        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if( text !== "" && text.trim().length <=10){
            setMessage("Text must be at least 10 characters")
            setBtnDisabled(true)

        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    return (
        <Card>
            
            <form>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect />
                <div className="input-group">
                    <input type="text"
                    onChange={handleTextChange}
                     placeholder="Write a review"/>
                     <Button type="submit" version={"primary" } isDisabled={btnDisabled} >Submit</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>

        </Card>
    )
}

export default FeedBackForm