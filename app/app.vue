<script setup lang="ts">
import { ref, onMounted } from "vue";
import BaseToast from "../components/UI/base-toast/BaseToast.vue";
import TheHeader from "../layouts/TheHeader.vue";
import TheFooter from "../layouts/TheFooter.vue";
import useTheme from "../composables/useTheme"
import { useToastStore } from "../stores/useToast";

const store = useToastStore();
useTheme();

const isImagesLoaded = ref(false);

// Lista de imágenes críticas (hero y logos principales)
const criticalImages = [
  // Home
  "/home.jpg",
  "/poster-clouds.jpg",
  "/poster-nautilus.jpg",
  "/poster-tenere.jpg",
  "/poster-grass.jpg",

  // TheHeader
  "/logo-black.png",
  "/logo-white.png",

  // TheFooter
  "/logo-ivc-white-new.png",
  "/logo-union-europea-white.png",
  "/logo-inaem-white.png",
  "/logo-prtr-white.png"
];

// Función para cargar imágenes
const loadImages = async () => {
  const promises = criticalImages.map(src => {
    console.log('entrando')
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => resolve(); // no bloquear si falla
    });
  });
  await Promise.all(promises);
  isImagesLoaded.value = true;
};

onMounted(() => {
  loadImages();
});
</script>

<template>
  <div>
    <BaseToast
      :is-visible="store?.success"
      severity="success"
      :message="$t('app.contact.emailOk')"
    />
    <BaseToast
      :is-visible="store?.error"
      severity="error"
      :message="$t('app.contact.emailError')"
    />

    <main class="app-main-container">
      <template v-if="isImagesLoaded">
        <TheHeader class="app-header-container" />
        <NuxtPage class="app-content-container" />
        <TheFooter />
      </template>

      <!-- Preloader simple mientras carga -->
      <template v-else>
        <div class="app-preloader">
          <p>Cargando...</p>
        </div>
      </template>
    </main>
  </div>
</template>

<style lang="scss">
.app-preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: #fff;
}
</style>
