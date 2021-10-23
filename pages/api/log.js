import { collection, addDoc } from 'firebase/firestore/lite'
import { getIp } from '../../helper/functions'
import { BLACK_LIST_TEXT_ERROR } from '../../constants/errors'
import ApiLimiter from '../../lib/api-limiter'
import firebaseApp from '../../lib/firebase-client'

const apiLimiter = new ApiLimiter()

export default async function logHandler(req, res) {
  const {
    method,
    connection,
    headers,
    body: { ref = '' },
  } = req
  const ip = getIp(headers, connection)
  const userAgent = headers['user-agent'] || ''

  if (apiLimiter.isInBlackList(ip))
    return res.status(403).end(BLACK_LIST_TEXT_ERROR)

  apiLimiter.updateRequestLimit(ip)

  const db = firebaseApp.getInstance()

  const addLogDocument = async (log) => {
    await addDoc(collection(db, 'logs'), log)
  }

  if (method === 'POST') {
    try {
      await addLogDocument({
        ip: ip,
        ref: ref,
        userAgent,
        date: new Date().toUTCString()
      })
      res.status(200).json('Logged successfully')
    } catch (error) {
      res.status(500).end('Something went wrong')
    }

    return
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${method} Not Allowed`)
}
