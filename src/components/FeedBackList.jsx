// import FeedbackData from '../data/feedBackData'

import FeedBackItems from "./FeedBackItems"

function FeedBackList({feedback, handleDelete}){
    if(!feedback || feedback.length === 0){
        console.log("NOt able to fetch list")
        return <p>No Feedback yet</p>
    }
    
    return   <div className="feedback-list" >
        {
            
            feedback.map((item) =>(
                <FeedBackItems key={item.id} item={item} 
                    handleDelete= { handleDelete}
                />
            ))
        
        }
    </div>
        
    
}


export default FeedBackList