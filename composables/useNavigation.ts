import { useRouter } from 'vue-router'

export function useNavigation() {
  const router = useRouter()

  const goTo = (path: string) => {
    router.push(path)
  }

  return {
    goTo,
  }
}