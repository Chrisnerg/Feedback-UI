import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FeedbackContext from './context/feedbackContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackContext>
      <App />
    </FeedbackContext>
  </StrictMode>,
)
