import { useContext } from 'react'
import FirebaseDBContext from '../context/firbase-db-context'

export default function useFirebaseAPI() {
  // const { analytics } = useContext(FirebaseDBContext)

  const addLog = (log) => {
    // logEvent(analytics, log)
  }

  return {
    addLog
  }
}
