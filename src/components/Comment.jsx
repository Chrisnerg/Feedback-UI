import { RxCross2 } from "react-icons/rx";

const Comment = ({ comment }) => {
  return (
    <div className="relative bg-white text-black mx-auto w-2/5 rounded-xl mb-8 mt-5 p-6 shadow text-center text-lg">
        <RxCross2 />
        
        <h3 className="absolute -top-3 -left-3 bg-pink-400 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
            {comment.rating}
        </h3>
      
        <p>{comment.text}</p>
      </div>
  )
}

export default Comment