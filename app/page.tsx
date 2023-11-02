import FeedbackList from '@/components/FeedbackList'
import FeedbackStats from '@/components/FeedbackStats'
import FeedbackForm from '@/components/FeedbackForm'
import AboutIconLink from "@/components/AboutIconLink"
import { FeedbackProvider } from '@/context/FeedbackContext'

export default function Home() {
  return (
    <div className='container'>
      <FeedbackProvider>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        <AboutIconLink />
      </FeedbackProvider>
    </div>
  )
}
