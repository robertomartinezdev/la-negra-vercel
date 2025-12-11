import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
  state: () => ({
    success: false,
    error: false,
  }),
  actions: {
    showSuccessToast() {
      this.success = true;
      setTimeout(() => {
        this.closeSuccessToast();
      }, 3000);
    },
    closeSuccessToast() {
      this.success = false;
    },
    showErrorToast() {
      this.error = true;
      setTimeout(() => {
        this.closeErrorToast();
      }, 3000);
    },
    closeErrorToast() {
      this.error = false;
    },
  },
});
