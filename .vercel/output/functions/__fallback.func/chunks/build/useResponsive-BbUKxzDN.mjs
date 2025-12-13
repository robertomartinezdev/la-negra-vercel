import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

function useResponsive(breakpoint = 1300) {
  const { width } = useWindowSize();
  const isMobile = computed(() => width.value < breakpoint);
  const isDesktop = computed(() => width.value >= breakpoint);
  return {
    width,
    isMobile,
    isDesktop
  };
}

export { useResponsive as u };
//# sourceMappingURL=useResponsive-BbUKxzDN.mjs.map
