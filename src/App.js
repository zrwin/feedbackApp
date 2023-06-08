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
    
    return (
        
        <div className="container">
        
        <Header/>
        <FeedBackForm/>
        <FeedbackStats feedback={feedback} />
        <FeedBackList  feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        
    )
}

export default App