import { API_ANALYTICS_ROUTE, API_USER_ROUTE } from '../constants/routes'
import { request } from '../lib/http-client'

export default function useLocalAPI() {
  const createUser = async (user) => {
    const content = await request(API_USER_ROUTE, user)

    return content
  }

  const createLog = async (ref) => {
    const content = await request(API_ANALYTICS_ROUTE, ref && { ref })

    return content
  }

  return {
    createUser,
    createLog
  }
}
