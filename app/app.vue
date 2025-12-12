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
      <TheFooter/>
    </main>
  </div>
</template>

<style lang="scss"> 
@use "~/assets/scss/main.scss";

.page-enter-active,
.page-leave-active {
  transition: none;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@media screen and (min-width: 1300px) {
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
}
</style>
