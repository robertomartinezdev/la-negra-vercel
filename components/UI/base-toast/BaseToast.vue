<script setup lang="ts">
type TPropsBaseToast = {
  severity?: string;
  message?: string;
  duration?: number;
  isVisible?: boolean;
};

const props = defineProps<TPropsBaseToast>();
</script>

<template>
  <Transition name="fade">
    <div v-if="props.isVisible" :class="`base-toast ${props.severity}`">
      <span class="base-toast-message">{{ props.message }}</span>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.base-toast {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 130px;
  left: 50%;
  width: 200px;
  height: 75px;
  transform: translateX(-50%);
  color: #ffffff;
  padding: 16px 32px;
  border-radius: 5px;
  z-index: 999;
  &.success {
    background-color: #5aba57;
  }
  &.error {
    background-color: #ff9494;
  }
  &.warning {
    background-color: #ebb035;
  }
  &.info {
    background-color: #24aadf;
  }
}

.base-toast-message {
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 1300px) {
  .base-toast {
    width: 80%;
  }
}
</style>
