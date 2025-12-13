<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useLocaleStore } from "../../../stores/useLocale";
import { useResponsive } from '../../../composables/useResponsive'

const { isMobile } = useResponsive()

const store = useLocaleStore();

const openPDF = () => {
  const pdfUrl = "/nautilus.pdf";
  window.open(pdfUrl, "_blank");
};
</script>

<template>
  <section class="container">
    <NuxtImg
      :src="'/show-nautilus.jpg'"
      preset="hero"
      :fit="isMobile ? 'contain' : 'cover'"
      alt="Portada de nautilus"
      class="hero"
    />
    <article class="show-info-container" @click="openPDF">
      <h2 class="title-card">
        {{ $t("app.shows.nautilus.title").toUpperCase() }}
      </h2>
      <div class="show-timeline-container">
        <span>2021</span>
        <span>|</span>
        <span>40'</span>
      </div>
      <p class="show-sinopsis">
        {{ $t("app.shows.nautilus.synopsis") }}
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
      v-if="store.locale !== 'val'"
      src="https://player.vimeo.com/video/675427754?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
      width="1920"
      height="1080"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      title="NAUTILUS  20.000 Leguas de viaje submarino (Teaser)"
      class="show-teaser"
    ></iframe>
    <iframe
      v-if="store.locale === 'val'"
      src="https://player.vimeo.com/video/713424742?h=7274e342c8"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      class="show-teaser"
    ></iframe>
  </section>
</template>
