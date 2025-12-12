import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

export function useResponsive(breakpoint = 1300) {
  const { width } = useWindowSize()

  const isMobile = computed(() => width.value < breakpoint)
  const isDesktop = computed(() => width.value >= breakpoint)

  return {
    width,
    isMobile,
    isDesktop
  }
}