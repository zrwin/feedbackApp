import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import { useState } from "react"
import FeedBackItems from "./components/FeedBackItems"
import FeedBackList from "./components/FeedBackList"
import FeedbackData  from "./data/feedBackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedBackForm from "./components/FeedBackForm"

function App(){
    
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id)=>{
        if(window.confirm("Are you sure you want to Delete?")){
            setFeedback(feedback.filter((item)=> item.id != id))
        }
    }

    const addFeedBack = (feedback)=>{
        feedback.id = uuidv4()
        console.log(feedback)
    }
    
    return (
        
        <div className="container">
        
        <Header/>
        <FeedBackForm handleAdd={addFeedBack}/> 
        <FeedbackStats feedback={feedback} />
        <FeedBackList  feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        
    )
}

export default App