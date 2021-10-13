import { useRouter } from 'next/dist/client/router'

export default function useRouteMatcher() {
  const router = useRouter()

  const isCurrentPath = (path) => router.pathname.endsWith(path)

  return {
    isCurrentPath
  }
}
