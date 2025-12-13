<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { useResponsive } from '../../composables/useResponsive'

const { isMobile } = useResponsive()
const tracks = [
  {
    name: "Tamino - Indigo Night",
    src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8",
  },
  {
    name: "Tamino - Indigo Night",
    src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8",
  },
  {
    name: "Tamino - Indigo Night",
    src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8",
  },
  {
    name: "Tamino - Indigo Night",
    src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8",
  },
  {
    name: "Tamino - Indigo Night",
    src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8",
  },
  {
    name: "Tamino - Indigo Night",
    src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8",
  },
];

const TWITCH_LOCAL =
  "https://player.twitch.tv/?channel=lanegrateatro&parent=localhost";

const TWITCH_PRO =
  "https://player.twitch.tv/?channel=lanegrateatro&parent=laapp-cd3f1.web.app";
</script>

<template>
  <section>
    <div>
      <NuxtImg
        :src="'/streaming.jpg'"
        preset="hero"
        :fit="isMobile ? 'contain' : 'cover'"
        alt="Portada streaming"
        class="hero"
      />
      <p class="streaming-text" v-text="$t('app.streaming.text')" />
    </div>
    <div class="digital-content-grid">
      <iframe
        v-for="(track, index) in tracks"
        :key="index"
        :src="track.src"
        width="300"
        height="200"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
    <div class="twitch-video-mobile">
      <iframe
        :src="TWITCH_PRO"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        width="300"
        height="200"
      />
    </div>
    <div class="twitch-video-desktop">
      <iframe
        :src="TWITCH_PRO"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        height="378"
        width="620"
      ></iframe>
    </div>
  </section>
</template>

<style scoped lang="scss">
.streaming-text {
  text-align: justify;
  font-size: 16px;
  line-height: 2;
  padding: 10px;
  margin-bottom: 3rem;
}
.digital-content-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.twitch-video-desktop {
  display: none;
}

@media screen and (min-width: 600px) {
  .digital-content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 35px;
  }
}
@media screen and (min-width: 1300px) {
  .twitch-video-mobile {
    display: none;
  }

  .twitch-video-desktop {
    display: flex;
    margin-top: 30px;
  }
}
</style>
