"use client";
import {v4 as uuidv4} from "uuid"
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  // feedback state
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This is  Feeback item 1',
    },
    {
      id: 2,
      rating: 5,
      text: 'This is Feedback item 2',
    },
    {
      id: 3,
      rating: 7,
      text: 'This is Feedback item 3',
    }
  ]);

 // Edit feedback state to false
  const [feedbackEdit, setFeedbackEdit] = useState({
    items: {},
    edit: false
  });
  
  // function to add new feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
    console.log('newfeedback:' , newFeedback)
  }

 // function to delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback((prevFeedback) => prevFeedback.filter((item) => item.id !== id));
    }
  };

  //function to update feedback item
  const updateFeedback = (id, upItem) => {
   setFeedback(
    feedback.map((item) => (item.id === id  ? {...item, ...upItem} : item))
   )  
  }

  // function to edit feedback to true
  const editFeedback = (item) => {
    console.log(item)
    setFeedbackEdit({
      item,
      edit: true,
    })
  }


// value for feedback context
  const value = {
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  };

  return <FeedbackContext.Provider value={value}>
    {children}
  </FeedbackContext.Provider>;
};

export default FeedbackContext;
