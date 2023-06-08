import Card from "./shared/Card"
import { useState } from "react"

function FeedBackForm(){

    const [text, setText]  = useState('')

    const handleTextChange = (e)=>{
        console.log(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className="input-group">
                    <input type="text"
                    onChange={handleTextChange}
                     placeholder="Write a review"/>
                     <button type="submit">Submit</button>
                </div>
            </form>

        </Card>
    )
}

export default FeedBackForm