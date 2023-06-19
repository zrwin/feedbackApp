import Card from "./shared/Card"
import { useState, useContext ,  useEffect} from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"


function FeedBackForm(){
    

    const [text, setText]  = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("")
    const [rating,setRating] = useState(10)

    
    const {addFeedBack, feedbackEdit ,  updateFeedback} = useContext(FeedbackContext)


    useEffect(()=>{
        console.log(feedbackEdit)

        if(feedbackEdit.edit === true){
            console.log("Hi")
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])


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

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback= {
                text: text, //can b written as text only for shorthand
                rating,   // similarly can be written as rating: rating   
            }


        if(feedbackEdit.edit  === true){
            setBtnDisabled(true)
            updateFeedback(feedbackEdit.item.id , newFeedback)
        }
        else{
            addFeedBack(newFeedback)
            
        }
        }
    }

    return (
        <Card >
            
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/> 
                <div className="input-group">
                    <input type="text"
                    onChange={handleTextChange}
                     placeholder="Write a review"
                     value={text}/>
                     <Button type="submit" version={"primary" } isDisabled={btnDisabled} >Submit</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>

        </Card>
    )
}

export default FeedBackForm