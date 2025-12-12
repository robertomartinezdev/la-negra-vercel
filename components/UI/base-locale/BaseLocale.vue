<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../../../stores/useLocale'

const { locale, setLocale, locales } = useI18n()

const currentLocale = computed({
  get: () => locale.value,
  set: (value: 'es' | 'en' | 'val') => {
    setLocale(value)
  }
})

const store = useLocaleStore()

watch(locale, (value) => {
  store.setLocale(value)
})
</script>

<template>
  <form class="select-locale-wrapped">
    <label v-for="l in locales" :key="l.code">
      <input v-model="currentLocale" type="radio" :value="l.code" />
      <span>{{ l.code.toUpperCase() }}</span>
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
