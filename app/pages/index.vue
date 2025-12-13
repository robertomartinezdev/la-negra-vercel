<script setup lang="ts">
import { useNavigation } from '../../composables/useNavigation'

defineOptions({
  name: 'Home',
})
const { goTo } = useNavigation()

// Array de carteles

  // { src: '/poster-tenere.jpg', route: '/shows/elarboldetenere', format: 'webp', quality: 70 },

const posters = [
  { src: '/poster-clouds.jpg', route: '/shows/enlasnubes', format: 'jpg' },
  { src: '/poster-nautilus.jpg', route: '/shows/nautilus', format: 'jpg' },
  { src: '/poster-grass.jpg', route: '/shows/pisarelcesped', format: 'jpg' },
]
</script>

<template>
  <section class="home-container">
    <NuxtImg
      src="/home.jpg"
      preset="hero"
      fit="cover" 
      alt="Portada de la compañía"
      class="hero"
      loading="eager"
      decoding="async"
    />

    <p class="home-text" v-text="$t('app.home.text')" />

    <div class="home-shows-container">
      <!-- Carteles de shows -->
      <div v-for="poster in posters" :key="poster.route" class="poster" @click="goTo(poster.route)">
        <NuxtImg
          :src="poster.src"
          preset="poster"
          :format="poster.format || 'webp'"
          :quality="80"
          alt="Poster de obra"
          width="300"
          height="450"
          sizes="(max-width: 768px) 90vw, (max-width: 1300px) 45vw, 300px"
          loading="lazy"
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
  align-items: center;
}

.hero {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
}

@media screen and (min-width: 1300px) {
  .home-shows-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
  }
}
</style>
