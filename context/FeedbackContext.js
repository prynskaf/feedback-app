"use client";
import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  // feedback state
  const [feedback, setFeedback] = useState([]);

 // Edit feedback state to false
  const [feedbackEdit, setFeedbackEdit] = useState({
    items: {},
    edit: false
  });

  useEffect(()=> {
    fetchData()
  },[])

  //function to fetch feedback
  const APIURL = `http://localhost:5000/feedback?_sort=id&_order=desc`;
  const fetchData = async () => {
    const response = await fetch(APIURL)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }
  
  // function to add new feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(APIURL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json();
    setFeedback((prevFeedback) => [data, ...prevFeedback]);
  }

 // function to delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`http://localhost:5000/feedback/${id}`,  {method: "DELETE"})
      
      setFeedback((prevFeedback) => prevFeedback.filter((item) => item.id !== id));
    }
  };

  //function to update feedback item
  const updateFeedback =  async (id, upItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`,{
      method: 'PUT',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify(upItem)
    })

    const data = await response.json()
   setFeedback(
    feedback.map((item) => (item.id === id  ? {...item, ...data} : item))
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
    isLoading,
  };

  return <FeedbackContext.Provider value={value}>
    {children}
  </FeedbackContext.Provider>;
};

export default FeedbackContext;
