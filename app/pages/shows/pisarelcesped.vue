<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useResponsive } from '../../../composables/useResponsive'

const { isMobile } = useResponsive()

const openPDF = () => {
  const pdfUrl = "/grass.pdf";
  window.open(pdfUrl, "_blank");
};
</script>

<template>
  <section class="container">
    <NuxtPicture
      v-if="isMobile"
      format="jpg"
      src="/show-grass.jpg"
      fit="contain"
      sizes="500px"
    />
    <NuxtPicture
      v-else
      format="jpg"
      src="/show-grass.jpg"
      fit="cover"
      sizes="1200px"
      height="400px"
    />
    <article class="show-info-container" @click="openPDF">
      <h2 class="title-card">
        {{ $t("app.shows.grass.title").toUpperCase() }}
      </h2>
      <div class="show-timeline-container">
        <span>2022</span>
        <span>|</span>
        <span>40'</span>
      </div>
      <p class="show-sinopsis">
        {{ $t("app.shows.grass.synopsis") }}
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
      src="https://player.vimeo.com/video/729368488?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
      width="1920"
      height="1080"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      title="Xafar la gespa - Teaser"
      class="show-teaser"
    ></iframe>
  </section>
</template>
