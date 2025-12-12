<script setup lang="ts">
import { useResponsive } from '../../composables/useResponsive'

const { isMobile } = useResponsive()

</script>
<template>
  <section class="company-container">
    <!-- Hero image -->
    <NuxtImg
      :src="'/company.jpg'"
      preset="hero"
      :fit="isMobile ? 'contain' : 'cover'" 
      alt="Portada de la compañía"
      class="hero"
    />
    <h2 class="title-theme" v-text="$t('app.company.title').toUpperCase()" />
    <p class="company-text" v-text="$t('app.company.text')" />
  </section>
</template>

<style setup lang="scss">
h2 {
  margin-top: 80px;
}
.company-text {
  text-align: justify;
  font-size: 16px;
  line-height: 2;
  padding: 10px;
}

.company-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
