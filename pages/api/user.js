import { collection, addDoc } from 'firebase/firestore/lite'
import { EMAIL_REGEX } from '../../constants/regex'
import firebaseApp from '../../lib/firebase-client'
import { verifyReacaptcha } from '../../lib/http-client'

export default async function userHandler(req, res) {
  const {
    body: { email, profession, similarSites = '', token },
    method
  } = req
  const db = firebaseApp.getInstance()

  const addUserDocument = async (user) => {
    await addDoc(collection(db, 'users'), user)
  }

  switch (method) {
    case 'POST':
      if (!email || !profession || !token || !EMAIL_REGEX.test(email)) {
        res.status(400).end('Fill data correctly')
        return
      }

      const recaptchaStatus = await verifyReacaptcha(token)

      if (!recaptchaStatus) {
        // TODO: finish FLAG
        // res.status(401).end("$FLAGURL=/api/admin-panel/user/49d98d88-a71a-45b8-b433-db367f90e058")
        res.status(400).end('Recaptcha was incorrected')
      }

      try {
        await addUserDocument({ email, profession, similarSites })
        res.status(200).json({ message: 'User created successfully' })
      } catch (error) {
        res.status(500).end('Something went wrong')
      }
      break
    default:
      res.setHeader('Allow', ['CREATE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
