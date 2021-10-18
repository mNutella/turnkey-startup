import { collection, addDoc } from 'firebase/firestore/lite'
import firebaseApp from '../../lib/firebase-client'

export default async function logHandler(req, res) {
  const {
    method,
    connection: { remoteAddress },
    headers
  } = req
  const referral = headers['referral'] || ''
  const userAgent = headers['user-agent'] || ''
  console.log(remoteAddress, referral, userAgent)

  const db = firebaseApp.getInstance()

  const addLogDocument = async (log) => {
    await addDoc(collection(db, 'logs'), log)
  }

  switch (method) {
    case 'POST':
      try {
        await addLogDocument({ ip: remoteAddress || '', referral, userAgent })
        res.status(200).json({ message: 'User created successfully' })
      } catch (error) {
        res.status(500).end('Something went wrong')
      }
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
