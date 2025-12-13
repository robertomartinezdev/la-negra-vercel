<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useResponsive } from '../../../composables/useResponsive'

const { isMobile } = useResponsive()

const openPDF = () => {
  const pdfUrl = "/nubes.pdf";
  window.open(pdfUrl, "_blank");
};
</script>

<template>
  <section class="container">
    <NuxtImg
      src="/show-clouds.jpg"
      preset="hero"
      :fit="isMobile ? 'contain' : 'cover'"
      alt="Portada de la compañía"
      class="hero"
    />   
    <article class="show-info-container" @click="openPDF">
      <h2 class="title-card">
        {{ $t("app.shows.clouds.title").toUpperCase() }}
      </h2>
      <div class="show-timeline-container">
        <span>2000</span>
        <span>|</span>
        <span>40'</span>
      </div>
      <p class="show-sinopsis">
        {{ $t("app.shows.clouds.synopsis") }}
      </p>
      <Icon
        class="icon-item"
        icon="fa6-solid:download"
        :inline="true"
        width="35"
      />
      <span class="dossier">{{ $t("app.shared.dossier") }}</span>
    </article>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Bo1IX1QxM8c?si=DEdwafBq7P_OCoxb"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="teaser"
    ></iframe>
  </section>
</template>

<style scoped lang="scss">
.teaser {
  margin-top: 6rem;
}
</style>
