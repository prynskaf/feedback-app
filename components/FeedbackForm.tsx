'use client'
import React, { useState, useContext, useEffect } from 'react';
import Card from '@/components/shared/Card';
import Button from '@/components/Button';
import RatingSelect from '@/components/RatingSelect';
import FeedbackContext from '@/context/FeedbackContext';


const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating,setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');


  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
      if(feedbackEdit.edit === true){
        setBtnDisabled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating);
      }
  }, [feedbackEdit]);

 

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(''); // Change null to an empty string
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be 10 characters or more');
      setBtnDisabled(true);
    } else {
      setMessage('');
      setBtnDisabled(false);
    }
  
    setText(event.target.value);
  }
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission here, for example, sending the feedback.
    if(text.trim().length > 10) {
      const newFeedback = {
         text,
         rating
      }
       
      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else {
        addFeedback(newFeedback)
      }
      setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 className='font-extrabold'>How would you rate your service with us?</h2>
        {/* todo select rating components */}
        <RatingSelect  select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            type="text"
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />
          <Button type='submit' version='primary' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
