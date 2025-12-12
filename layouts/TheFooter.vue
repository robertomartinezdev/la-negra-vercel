<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const currentYear = new Date().getFullYear();

const openPDF = () => {
  const pdfUrl = "/ivc.pdf";
  window.open(pdfUrl, "_blank");
};
</script>

<template>
  <footer class="footer-wrapped">
    <!-- LOGO IVC + TEXTO -->
    <div class="logo-ivc-container" @click="openPDF">
      <NuxtImg
        class="logo max-logo"
        format="png"
        src="/logo-ivc-white-new.png"
        alt="Logo IVC"
        preset="logo"
      />

      <p class="ivc-text">
        L'entitat Institut Valencià de Cultura (IVC) ha concedit una ajuda
        de 64.441,54€ a La Negra Produce SL per a la realització de les
        seues produccions teatrals de l'any 2025, així com la gira dels seus
        espectacles anteriors, projectes de residència i activitats de
        mediació. Tot això de conformitat amb el que és preveu en l’article
        4 de la Llei 1/2022, de 13 d’abril, de la Generalitat, de
        transparència i bon govern (DOGV 9323, 22.04.2022).
      </p>
    </div>

    <!-- LOGOS -->
    <div class="logos-container">
      <NuxtImg class="logo max-logo" src="/logo-union-europea-white.png" preset="logo" />
      <NuxtImg class="logo max-logo" src="/logo-inaem-white.png" preset="logo" />
      <NuxtImg class="logo max-logo" src="/logo-prtr-white.png" preset="logo" />
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
  flex-direction: column; /* SIEMPRE columna */
  align-items: center;
  text-align: center;
  gap: 14px;
  margin-bottom: 28px;
  cursor: pointer;
}

.ivc-text {
  color: #fff;
  font-size: 12px; /* aumentado */
  opacity: 0.87;
  max-width: 650px;
  line-height: 1.45;
}

/* LOGOS */
.logos-container {
  display: flex;
  flex-direction: column; /* móvil */
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;
}

@media screen and (min-width: 768px) {
  .logos-container {
    flex-direction: row;
    justify-content: center;
    gap: 26px;
  }
}

/* ---------- SOCIAL ICONS ---------- */

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
  padding: 12px 0;

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
  .max-logo {
    width: 400px;
  }
}
</style>
