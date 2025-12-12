<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useLocaleStore } from "../../../stores/useLocale";
import { useResponsive } from '../../../composables/useResponsive'

const { isMobile } = useResponsive()

const store = useLocaleStore();

const openPDF = () => {
  const pdfUrl = "/tenere.pdf";
  window.open(pdfUrl, "_blank");
};
</script>

<template>
  <section class="container">
    <NuxtPicture
      v-if="isMobile"
      format="jpg"
      src="show-tenere.jpg"
      fit="contain"
      sizes="500px"
    />
    <NuxtPicture
      v-else
      format="jpg"
      src="show-tenere.jpg"
      fit="cover"
      sizes="1200px"
      height="400px"
    />
    <article class="show-info-container" @click="openPDF">
      <h2 class="title-card">
        {{ $t("app.shows.tenere.title").toUpperCase() }}
      </h2>
      <div class="show-timeline-container">
        <span>2022</span>
        <span>|</span>
        <span>40'</span>
      </div>
      <p class="show-sinopsis">
        {{ $t("app.shows.tenere.synopsis") }}
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
      src="https://player.vimeo.com/video/823367211?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      title="The Tree of Ténéré (teaser)"
      class="show-teaser"
    >
    </iframe>
    <iframe
      v-if="store.locale === 'val'"
      src="https://player.vimeo.com/video/818767651?h=1e7576f0c7"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      class="show-teaser"
    ></iframe>
  </section>
</template>
