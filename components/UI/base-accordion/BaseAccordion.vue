<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const toggleAccordion = (callback: any) => {
  isOpen.value = !isOpen.value;
  if (typeof callback === "function") {
    callback(isOpen.value);
  }
};

const close = (callback: any) => {
  isOpen.value = false;
  if (typeof callback === "function") {
    callback();
  }
};
</script>

<template>
  <div class="base-accordion-container">
    <div class="base-accordion-header">
      <slot
        name="header"
        :toggle-accordion="toggleAccordion"
        :is-open="isOpen"
      />
    </div>

    <Transition>
      <div v-if="isOpen" class="base-accordion-content">
        <slot name="content" :close="close" :is-open="isOpen" />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
