import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    currentTheme: "light",
  }),
  getters: {
    getCurrentTheme(state) {
      return state.currentTheme;
    },
  },
  actions: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    },
  },
});
