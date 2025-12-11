<script setup lang="ts">
import { watchEffect } from "vue";
import { useLocaleStore } from "../../../stores/useLocale";

const { locale } = useI18n();

const store = useLocaleStore();

watchEffect(() => {
  store.locale = locale.value;
});
</script>

<template>
  <form class="select-locale-wrapped">
    <label>
      <input v-model="locale" type="radio" value="es" />
      <span>
        ES
        <span class="hover-text">ES</span>
      </span>
    </label>
    <label>
      <input v-model="locale" type="radio" value="en" />
      <span>
        EN
        <span class="hover-text">EN</span>
      </span>
    </label>
    <label>
      <input v-model="locale" type="radio" value="val" />
      <span>
        VAL
        <span class="hover-text">VAL</span>
      </span>
    </label>
  </form>
</template>

<style scoped lang="scss">
.select-locale-wrapped {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      font-size: var(--text-lg);
      position: relative;
      .hover-text {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        pointer-events: none;
        font-size: var(--text-lg);
        transition: opacity 0.2s ease;
      }
    }
    input:checked {
      opacity: 1;
      font-weight: bolder;
    }
  }
}
</style>
