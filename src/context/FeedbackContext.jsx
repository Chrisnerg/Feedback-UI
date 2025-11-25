import { createContext, useState, useEffect } from "react";

export const feedbackContext = createContext();

const FeedbackContext = ( {children}) => {
    const [feedback, setFeedback] = useState([]);
    const [editingId, setEditingId] = useState(null);

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
    <feedbackContext.Provider value={{ feedback, setFeedback, editingId, setEditingId}}>
        {children}
    </feedbackContext.Provider>
  )
}

export default FeedbackContext