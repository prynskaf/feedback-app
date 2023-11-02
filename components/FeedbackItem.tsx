'use client'
import Card from '@/components/shared/Card'
import { useContext } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '@/context/FeedbackContext'

const FeedbackItem = ({item}:any) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
   
  return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">  {item.text}</div>
        <button className='close' onClick={()=> deleteFeedback(item.id)} >
          <FaTimes color="purple" />
        </button>
        <button  className='edit' onClick={()=>editFeedback(item)}>
          <FaEdit color="purple" />
        </button>
    </Card> 
  )
}

export default FeedbackItem;