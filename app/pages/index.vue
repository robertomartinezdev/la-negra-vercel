<script setup lang="ts">
import { useResponsive } from '../../composables/useResponsive'
import { useNavigation } from '../../composables/useNavigation'

const { goTo } = useNavigation()
const { isMobile } = useResponsive()
</script>

<template>
  <section class="home-container">
    <!-- Imagen de portada -->
    <NuxtPicture
      v-show="isMobile"
      format="jpg"
      src="/home.jpg"
      fit="contain"
      sizes="500px"
    />
    <NuxtPicture
      v-show="!isMobile"
      format="jpg"
      src="/home.jpg"
      fit="cover"
      sizes="1200px"
      height="400px"
    />

    <p class="home-text" v-text="$t('app.home.text')" />

    <div class="home-shows-container">
      <!-- En las cards de shows usamos width fijo en desktop y 100% en mobile -->
      <div @click="goTo('/shows/enlasnubes')" class="clickable-img">
        <NuxtPicture
          format="jpg"
          src="/poster-clouds.jpg"
          fit="cover"
          sizes="(max-width: 1300px) 100vw, 300px"
          width="300"
          height="auto"
        />
      </div>

      <div @click="goTo('/shows/nautilus')" class="clickable-img">
        <NuxtPicture
          format="jpg"
          src="/poster-nautilus.jpg"
          fit="cover"
          sizes="(max-width: 1300px) 100vw, 300px"
          width="300"
          height="auto"
        />
      </div>

      <div @click="goTo('/shows/elarboldetenere')" class="clickable-img">
        <NuxtPicture
          format="webp"
          src="/poster-tenere.jpg"
          fit="cover"
          quality="70"
          sizes="(max-width: 1300px) 100vw, 300px"
          width="300"
          height="auto"
        />
      </div>

      <div @click="goTo('/shows/pisarelcesped')" class="clickable-img">
        <NuxtPicture
          format="jpg"
          src="/poster-grass.jpg"
          fit="cover"
          sizes="(max-width: 1300px) 100vw, 300px"
          width="300"
          height="auto"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.home-text {
  text-align: center;
  font-size: 18px;
  line-height: 2;
  padding: 10px;
  max-width: 600px;
  font-weight: bold;
}

.home-shows-container {
  display: grid;
  gap: 40px;
}

.clickable-img {
  cursor: pointer;
}

@media screen and (min-width: 1300px) {
  .home-shows-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
  }
}
</style>
