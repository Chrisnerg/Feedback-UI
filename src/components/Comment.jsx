import { RxCross2 } from "react-icons/rx";
import { feedbackContext } from "../context/feedbackContext";
import { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";

const Comment = ({ comment }) => {

  const { feedback, setFeedback, setEditingId } = useContext(feedbackContext);

  const handleDelete = (id) => {
    const newFeedback = feedback.filter( (feed) => feed.id !== id);
    setFeedback(newFeedback);
    console.log(feedback);
  }

  const editComment = () => {
  setEditingId(comment.id);
};

  return (
    <div className="relative bg-white text-black mx-auto w-2/5 rounded-xl mb-8 mt-5 p-6 shadow text-center text-lg">

        <div className="flex justify-self-end group">
          <button onClick={() => editComment()}>
            <FaRegEdit className=" text-sm text-red-700 mr-3"/>
          </button>
          <button onClick={() => handleDelete(comment.id)}>
          <RxCross2 className=" text-sm text-red-700"/>
        </button>
        </div>
          
      
        <h3 className="absolute -top-3 -left-3 bg-pink-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
            {comment.rating}
        </h3>
      
        <p>{comment.text}</p>
      </div>
  )
}

export default Comment