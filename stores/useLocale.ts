import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({ locale: 'es' }),
  actions: {
    setLocale(l: string) { this.locale = l }
  }
})