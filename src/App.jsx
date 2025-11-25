import { useEffect, useState } from 'react'
import Header from './components/Header';
import FeedBackPage from './pages/FeedBackPage';

const App = () => {
  const title = "Blog Post";
  const body = "This is my blog post";
  const [showComments,setShowComments] = useState(true);
  const [Loading,setLoading] = useState(false);

  const comments = [
    {id: 1, text: "comment one"},
    {id: 1, text: "comment two"},
    {id: 1, text: "comment three"}
  ]

  if(Loading) {
    return "Loading..."
  }

  return (

    <>
      <FeedBackPage />
    </>
  )
}

export default App