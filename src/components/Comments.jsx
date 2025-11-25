import Comment from "./Comment";
import { useState, useEffect } from "react";

const Comments = () => {

    const [feedback, setFeedback] = useState([]);

  useEffect(() => {
  const getFeedback = async () => {
    try {
      const res = await fetch("/feedback.json");
      const data = await res.json();
      setFeedback(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    
  };

  getFeedback();
}, []);

  return (
    <div>
        {feedback.map( (comment) => (
       <Comment key={comment.id} comment={comment}/>
      ))}
    </div>
  )
}

export default Comments