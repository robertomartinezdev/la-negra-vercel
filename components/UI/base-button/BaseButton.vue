<script setup lang="ts">
import { Icon } from "@iconify/vue";
type TPropsBaseButton = {
  severity: string;
  text: string;
  isLoading?: boolean;
};

const props = defineProps<TPropsBaseButton>();
const emit = defineEmits<{
  (e: "@click"): void;
}>();

function emitEvent() {
  emit("@click");
}
</script>

<template>
  <div>
    <button
      v-show="!props.isLoading"
      :class="`base-button ${props.severity}`"
      :is-loading="props.isLoading"
      @click="emitEvent"
    >
      {{ props.text }}
    </button>
    <div
      v-show="props.isLoading"
      class="spinner-container"
      :is-loading="props.isLoading"
    >
      <Icon
        class="icon-spin"
        icon="fa6-solid:spinner"
        :spin="true"
        width="30"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-spin {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: var(--rounded);
  height: 40px;
  min-width: 140px;
}

.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: var(--text-sm);
  border-radius: 3px;
  padding: 15px 50px;
  height: 40px;
  min-width: 140px;
  border: none;
  cursor: pointer;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;

  &.primary {
    background-color: var(--button-bg);
    color: var(--button-text);
  }
  &.primary-theme {
    background-color: var(--button-theme-bg);
    color: var(--button-theme-text);
  }
}

.base-button:hover {
  opacity: 0.8;
}

.base-button:active {
  opacity: 0.4;
}
</style>
