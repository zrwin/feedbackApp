// import FeedbackData from '../data/feedBackData'
import { AnimatePresence, motion } from "framer-motion"
import FeedBackItems from "./FeedBackItems"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"



function FeedBackList(){
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        console.log("NOt able to fetch list")
        return <p>No Feedback yet</p>
    }
    
    return   <div className="feedback-list" >
        <AnimatePresence>
            {
            feedback.map((item) =>(
                <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity:1}}
                    exit={{opacity: 0}}
                >

                <FeedBackItems key={item.id} item={item}    
                />
                </motion.div>
                ))
            }
        </AnimatePresence>
    </div>
        
    
}


export default FeedBackList