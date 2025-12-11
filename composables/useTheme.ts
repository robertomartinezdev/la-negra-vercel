import { onMounted, watchEffect } from "vue";
import { useThemeStore } from "../stores/useTheme";

export default function useTheme() {
  const themeStore = useThemeStore();

  onMounted(() => {
    watchEffect(() => {
      const themeClass =
        themeStore.currentTheme === "light" ? "light-theme" : "dark-theme";

      document.documentElement.className = themeClass;

      document.documentElement.style.setProperty(
        "--theme-bg",
        getComputedStyle(document.documentElement).getPropertyValue(
          `--${themeClass}-bg`,
        ),
      );

      document.documentElement.style.setProperty(
        "--theme-text",
        getComputedStyle(document.documentElement).getPropertyValue(
          `--${themeClass}-text`,
        ),
      );
    });
  });
}
