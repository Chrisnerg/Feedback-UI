import Comment from "./Comment";
import { useState, useEffect } from "react";
import { feedbackContext } from "../context/feedbackContext";
import { useContext } from "react";

const Comments = () => {

  const { feedback,setFeedback }  = useContext(feedbackContext);

  //calculating the rating average
  const totalRating = feedback.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = feedback.length > 0 ? (totalRating / feedback.length).toFixed(1) : 0;


  return (
    <div>
        <div className="flex text-white pt-6 justify-around px-48">
            <p>Reviews ({feedback.length})</p>
            <p>Rating: {averageRating}</p>
        </div>
        
        {feedback.map( (comment) => (
       <Comment key={comment.id} comment={comment}/>
      ))}
    </div>
  )
}

export default Comments