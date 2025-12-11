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
    <!-- CONTENEDOR DE LOGOS -->
    <div class="logos-wrapper">
      <!-- Logo superior independiente -->
      <div class="logo-top">
        <div class="ivc-container" @click="openPDF">
          <NuxtImg
            class="footer-logo ivc-logo"
            format="png"
            src="logo-ivc-white-new.png"
            alt="Logo IVC"
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
      </div>

      <!-- Logos en línea horizontal -->
      <div class="logos-row">
        <NuxtImg
          class="footer-logo"
          format="png"
          src="logo-union-europea-white.png"
          alt="Logo Unión Europea"
        />
        <NuxtImg
          class="footer-logo"
          format="png"
          src="logo-inaem-white.png"
          alt="Logo INAEM"
        />
        <NuxtImg
          class="footer-logo"
          format="png"
          src="logo-prtr-white.png"
          alt="Logo PRTR"
        />
      </div>
    </div>

    <!-- SOCIAL -->
    <div class="social-media-container">
      <a
        href="https://www.facebook.com/lanegraproduce/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon class="icon-item" icon="entypo-social:facebook" :inline="true" />
      </a>

      <a
        href="https://www.instagram.com/lanegra_teatre"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon class="icon-item" icon="fe:instagram" :inline="true" />
      </a>

      <a
        href="https://www.twitch.tv/lanegrateatro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon class="icon-item" icon="ion:logo-twitch" :inline="true" />
      </a>

      <a
        href="https://open.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
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

.icon-item,
.contact,
.copy {
  color: #ffffff;
  transition: all 0.25s ease;
}

.contact {
  font-size: 9px;
  font-weight: bold;
  text-decoration: none;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
  }
}

.copy {
  font-size: 7px;
  margin-top: 10px;
  opacity: 0.6;
}

/* ---------- LOGOS ---------- */

.logos-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
}

.ivc-container {
  display: flex;
  flex-direction: row; /* Logo a la izquierda y texto a la derecha */
  align-items: flex-start;
  gap: 15px;
  cursor: pointer;
}

.ivc-text {
  color: #ffffff;
  font-size: 10px; /* más pequeño que el logo */
  margin: 0;
  opacity: 0.85;
  max-width: 600px;
}

/* Logos horizontales sin animación */
.logo-top {
  display: flex;
  justify-content: center;
  width: 100%;
}

.logos-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 0 10px;
}

.footer-logo {
  width: clamp(5rem, 20vw, 9rem);
  object-fit: contain;
}

/* ---------- SOCIAL ICONS ---------- */

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
  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    filter 0.25s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-2px) scale(1.1);
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
  }
}

/* ---------- MOBILE ---------- */
@media screen and (max-width: 768px) {
  .ivc-container {
    flex-direction: column;
    align-items: center;
  }

  .ivc-text {
    text-align: center;
    max-width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .social-media-container {
    gap: 14px;
  }

  .icon-item {
    width: 16px;
    height: 16px;
  }

  .footer-logo {
    width: clamp(4rem, 30vw, 7rem);
  }
}

/* ---------- DESKTOP ---------- */
@media screen and (min-width: 1300px) {
  .logos-row {
    width: 1300px;
    justify-content: space-between;
  }

  .footer-logo {
    width: 340px;
  }

  .ivc-logo {
    width: 290px;
  }

  .ivc-text {
    font-size: 14px;
  }

  .icon-item {
    width: 22px;
    height: 22px;
  }

  .copy {
    font-size: 10px;
  }
}
</style>
