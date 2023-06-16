import { FaTimes , FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import Card from "./shared/Card"
import { useContext } from 'react'

function FeedBackItems({item}) {
  // const [rating,setRating] = useState(item.rating)
  // const [text,setText] = useState(item.text)

  // const handleClick= ()=>{
  //   setRating((prev)=>{
  //     return prev+1
  //   })
  // }

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  

  

  return(
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>{deleteFeedback(item.id)}} className="close">
        <FaTimes color='purple'/>
      </button>
      <button onClick={()=>{
        editFeedback(item)
      }} className="edit">
        <FaEdit color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card  >
  )

 
  // console.log(item.item.id);

}

export default FeedBackItems