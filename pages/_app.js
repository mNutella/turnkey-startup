import { getAnalytics } from 'firebase/analytics'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import FirebaseDBContext from '../context/firbase-db-context'
import firebaseApp from '../lib/firebase-client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let db
  let analytics

  if (typeof window !== 'undefined') {
    db = firebaseApp.getInstance()
    analytics = getAnalytics()
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_CLIENT_RECAPTCHA_ID}
      scriptProps={{ async: true }}
    >
      <FirebaseDBContext.Provider value={{ db, analytics }}>
        <Component {...pageProps} />
      </FirebaseDBContext.Provider>
    </GoogleReCaptchaProvider>
  )
}

export default MyApp
