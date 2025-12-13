<script setup lang="ts">
import BaseToast from "../components/UI/base-toast/BaseToast.vue";
import TheHeader from "../layouts/TheHeader.vue";
import TheFooter from "../layouts/TheFooter.vue";
import useTheme from "../composables/useTheme"
import { useToastStore } from "../stores/useToast";

const store = useToastStore();
useTheme();

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
        <TheHeader class="app-header-container" />
        <NuxtPage class="app-content-container" />
        <TheFooter />
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
