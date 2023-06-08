import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"


function FeedBackItems({item, handleDelete}) {
  // const [rating,setRating] = useState(item.rating)
  // const [text,setText] = useState(item.text)

  // const handleClick= ()=>{
  //   setRating((prev)=>{
  //     return prev+1
  //   })
  // }


  

  return(
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>{handleDelete(item.id)}} className="close">
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card  >
  )

 
  // console.log(item.item.id);

}

export default FeedBackItems