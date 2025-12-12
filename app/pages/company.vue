<script setup lang="ts">
import { useResponsive } from '../../composables/useResponsive'

const { isMobile } = useResponsive()

</script>
<template>
  <section class="company-container">
    <NuxtPicture
      v-show="isMobile"
      format="jpg"
      src="/company.jpg"
      fit="contain"
      sizes="500px"
    />
    <NuxtPicture
      v-show="!isMobile"
      format="jpg"
      src="/company.jpg"
      fit="cover"
      sizes="1200px"
      height="400px"
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
</style>
