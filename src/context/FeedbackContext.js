import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext= createContext()

export const FeedbackProvider= ({children})=>{

     const [feedback, setFeedback] = useState([
        {
        id: 1, 
        text: "This is item 1",
        rating: 10,
        },
        {
            id: 2, 
            text: "This is item 2",
            rating: 8,
        },
        {
            id: 3, 
            text: "This is item 3",
            rating: 9,
         },

    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })


    const deleteFeedback = (id)=>{
        if(window.confirm("Are you sure you want to Delete?")){
            setFeedback(feedback.filter((item)=> item.id != id))
        }
    }

    //ADd feedback
    const addFeedBack = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback , ...feedback])
    }

    //update feedback
    const updateFeedback = (id, updItem)=>{
        
        setFeedback(feedback.map((item)=>
            item.id == id ? {...item , ...updItem} : item
        ))
    }

//SEt item to  be updated   
    const editFeedback =  (item)=>{
        
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider 
        value={
            {
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedBack,
                editFeedback,
                updateFeedback,
            }
        }
    >
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext