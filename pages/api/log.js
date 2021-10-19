import { collection, addDoc } from 'firebase/firestore/lite'
import firebaseApp from '../../lib/firebase-client'

export default async function logHandler(req, res) {
  const {
    method,
    connection: { remoteAddress },
    headers
  } = req
  const ip =
    headers['x-real-ip'] ||
    (headers['x-forwarded-for'] || '').split(',').pop().trim() ||
    remoteAddress ||
    ''
  const referer = headers['referer'] || ''
  const userAgent = headers['user-agent'] || ''

  const db = firebaseApp.getInstance()

  const addLogDocument = async (log) => {
    await addDoc(collection(db, 'logs'), log)
  }

  if (method === 'POST') {
    try {
      await addLogDocument({
        ip: ip,
        referer,
        userAgent,
        headers: JSON.stringify(headers),
        date: new Date().toUTCString()
      })
      res.status(200).json({ message: 'User created successfully' })
    } catch (error) {
      res.status(500).end('Something went wrong')
    }

    return
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${method} Not Allowed`)
}
