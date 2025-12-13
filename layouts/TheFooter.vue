<script lang="ts" setup>
import { Icon } from "@iconify/vue";

defineOptions({
  name: 'TheFooter',
})

const currentYear = new Date().getFullYear();

const openPDF = () => {
  const pdfUrl = "/ivc.pdf";
  window.open(pdfUrl, "_blank");
};

// Logos del footer (v-for)
const logos = [
  { src: '/logo-union-europea-white.png', alt: 'Logo Unión Europea' },
  { src: '/logo-inaem-white.png', alt: 'Logo INAEM' },
  { src: '/logo-prtr-white.png', alt: 'Logo PRTR' },
];
</script>

<template>
  <footer class="footer-wrapped">
    <!-- LOGO IVC + TEXTO -->
    <div class="logo-ivc-container" @click="openPDF">
      <NuxtImg
        class="logo"
        src="/logo-ivc-white-new.png"
        alt="Logo IVC"
        preset="logo"
        width="250"
        loading="lazy"
        fit="contain"
      />

      <p class="ivc-text">{{ $t("app.footer.ivc") }}</p>
    </div>

    <!-- LOGOS (v-for) -->
    <div class="logos-container">
      <NuxtImg
        v-for="logo in logos"
        :key="logo.alt"
        class="logo"
        :src="logo.src"
        :alt="logo.alt"
        preset="logo"
        width="250"
        loading="lazy"
        fit="contain"
      />
    </div>

    <!-- SOCIAL -->
    <div class="social-media-container">
      <a href="https://www.facebook.com/lanegraproduce/" target="_blank" rel="noopener noreferrer">
        <Icon class="icon-item" icon="entypo-social:facebook" :inline="true" />
      </a>

      <a href="https://www.instagram.com/lanegra_teatre" target="_blank" rel="noopener noreferrer">
        <Icon class="icon-item" icon="fe:instagram" :inline="true" />
      </a>

      <a href="https://www.twitch.tv/lanegrateatro" target="_blank" rel="noopener noreferrer">
        <Icon class="icon-item" icon="ion:logo-twitch" :inline="true" />
      </a>

      <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
        <Icon class="icon-item" icon="cib:spotify" :inline="true" />
      </a>

      <span> | </span>

      <a class="contact" href="mailto:lanegraproduce@gmail.com">
        lanegraproduce@gmail.com
      </a>
    </div>

    <p class="copy">&copy; {{ currentYear }} Carlos Amador Aparicio</p>
  </footer>
</template>

<style scoped lang="scss">
.footer-wrapped {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(6px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* LOGO IVC + TEXTO */
.logo-ivc-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  cursor: pointer;
}

.ivc-text {
  color: #fff;
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.87;
  max-width: 90%;
  text-align: center;
  margin: 0 auto 20px;
  font-weight: 400;
}

@media screen and (min-width: 768px) {
  .ivc-text {
    font-size: 14px;
    max-width: 650px;
    line-height: 1.65;
  }
}

@media screen and (min-width: 1300px) {
  .ivc-text {
    font-size: 15px;
    line-height: 1.7;
  }
}

/* LOGOS */
.logos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

@media screen and (min-width: 768px) {
  .logos-container {
    flex-direction: row;
    justify-content: center;
    gap: 26px;
  }
}

.logo {
  object-fit: contain;
  display: block;
}

/* SOCIAL ICONS */
.icon-item,
.contact,
.copy {
  color: #ffffff;
  transition: all 0.25s ease;
}

.social-media-container {
  display: flex;
  gap: 20px;
  align-items: center;

  span {
    color: #555;
  }
}

.icon-item {
  width: 18px;
  height: 18px;
  opacity: 0.9;
  transition: transform 0.25s ease, opacity 0.25s ease, filter 0.25s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-2px) scale(1.1);
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
  }
}

.contact {
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
  }
}

.copy {
  font-size: 9px;
  margin-top: 10px;
  opacity: 0.6;
}

/* DESKTOP grande */
@media screen and (min-width: 1300px) {
  .icon-item {
    width: 22px;
    height: 22px;
  }

  .copy {
    font-size: 10px;
  }
}
</style>
