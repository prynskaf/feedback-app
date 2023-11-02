'use client';
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import {motion , AnimatePresence} from "framer-motion";
import FeedbackContext from "@/context/FeedbackContext";


const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  
  if (!feedback || feedback.length === 0) {
    return <p className="ml-4 text-[pink]">No Feedback Yet!</p>;
  }

  return (
    <AnimatePresence>
    <div className="feedback-list space-y-5 ">
      {feedback.map((item: any) => (
        <motion.div 
         key={item.id}
         initial={{ opacity: 0}}
         animate={{ opacity: 1}}
         exit={{ opacity: 0}}
        >
        <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
    </div>
    </AnimatePresence>
  );
}

export default FeedbackList;
