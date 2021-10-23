import { collection, addDoc } from 'firebase/firestore/lite'
import { BLACK_LIST_TEXT_ERROR } from '../../constants/errors'
import { EMAIL_REGEX } from '../../constants/regex'
import { getIp } from '../../helper/functions'
import ApiLimiter from '../../lib/api-limiter'
import firebaseApp from '../../lib/firebase-client'
import { verifyReacaptcha } from '../../lib/http-client'

const apiLimiter = new ApiLimiter()

export default async function userHandler(req, res) {
  const {
    method,
    connection,
    headers,
    body: { email, profession, message = '', token, flag }
  } = req
  const ip = getIp(headers, connection)
  const db = firebaseApp.getInstance()

  if (apiLimiter.isInBlackList(ip))
    return res.status(403).end(BLACK_LIST_TEXT_ERROR)

  apiLimiter.updateRequestLimit(ip)

  const addUserDocument = async (user) => {
    await addDoc(collection(db, 'users'), user)
  }

  if (method === 'POST') {
    if (!email || !profession || !token || !EMAIL_REGEX.test(email)) {
      res.status(400).end('Fill data correctly')
      return
    }

    const recaptchaStatus = await verifyReacaptcha(token)

    if (!recaptchaStatus) {
      res.status(400).end('Recaptcha was incorrect')
      return
    }

    try {
      const isPromo = flag === process.env.NEXT_PUBLIC_CTF_FLAG
      await addUserDocument({
        email,
        profession,
        message,
        promo: isPromo,
        date: new Date().toUTCString()
      })
      res.status(200).json({
        message: !isPromo ? 'Successfully sent' : 'Successfully sent with promo'
      })
    } catch (error) {
      res.status(500).end('Something went wrong')
    }

    return
  }

  res.status(200).end('FLAG_PART_3_OF_3=61c5f585ac1')
}
