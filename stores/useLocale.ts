import { defineStore } from "pinia";

export const useLocaleStore = defineStore(
  "locale", // ID obligatorio
  {
    state: (): { locale: string } => ({
      locale: "es",
    }),
    getters: {
      getLocale: (state) => state.locale,
    },
    actions: {
      setLocale(newLocale: string) {
        this.locale = newLocale
      }
    }
  }
);