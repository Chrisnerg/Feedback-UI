import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { feedbackContext } from "../context/feedbackContext";

const Rating = () => {
  // Variables and states
  const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [text, setText] = useState(null);
  const [textBool, setTextBool] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [feedbackRating, setRating] = useState(0);
  const [isSelected, setSelected] = useState(false);

  //context variables
  const { feedback, setFeedback, editingId, setEditingId } = useContext(feedbackContext);

  //Incrementing id of next element based on the length of the array
  const nextId = feedback.length > 0 ? feedback.length + 1 : uuidv4();

  //Function for checking if the text is greater that 10 characters and disabling button based on the condition.
  const handleInput = (text) => {
    if (!text || text.trim().length <= 10) {
      setTextBool(true);
      setDisabled(true);
    } else {
      setTextBool(false);
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (editingId) {
      const commentToEdit = feedback.find((f) => f.id === editingId);
      if (commentToEdit) {
        setText(commentToEdit.text);
        setRating(commentToEdit.rating);
        setDisabled(false); // assume valid since it was saved before
      }
    } else {
      // reset form when not editing
      setText("");
      setRating(0);
      setDisabled(true);
    }
  }, [editingId, feedback]);

  // Function for adding the comment to the Array
  const handleSubmit = () => {
    if (editingId) {
      // ✏️ Update existing comment
      const updatedFeedback = feedback.map((f) =>
        f.id === editingId ? { ...f, text, rating: feedbackRating } : f
      );
      setFeedback(updatedFeedback);
      setEditingId(null); // exit edit mode
    } else {
      // ➕ Add new comment
      const newComment = {
        id: nextId,
        rating: feedbackRating,
        text,
      };
      setFeedback([newComment, ...feedback]);
    }

    // Reset form
    setText("");
    setRating(0);
    setDisabled(true);
  };

  return (
    <div className=" bg-white text-black mx-auto w-2/5 rounded-xl mt-12 p-6 shadow">
      <h3 className="text-center font-semibold">
        How would you rate your service with us?
      </h3>

      <div className="flex justify-center space-x-4 p-6">
        {rating.map((num) => (
          <label key={num} className=" ">
            <input
              type="radio"
              name="rating"
              value={num}
              className="peer sr-only"
              onClick={() => {
                setRating(num);
                required
              }}
            />
            <div
              className={`w-8 h-8 rounded-full border-pink-500 flex items-center justify-center select-none ${feedbackRating === num? "bg-pink-500 text-white" : "bg-gray-300 text-black"}`}
            >
              {num}
            </div>
          </label>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            handleInput(e.target.value);
          }}
          required
        />
        <button
          disabled={disabled}
          onClick={() => handleSubmit()}
          className={`absolute right-2 mt-2 bg-gray-300 px-2 rounded
            ${
              disabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-400 text-black"
            }`}
        >
          send
        </button>
      </div>
      <p className="text-center pt-2 text-sm text-red-500">
        {textBool && "Comment must be more than 10 characters or more"}
      </p>
    </div>
  );
};

export default Rating;
