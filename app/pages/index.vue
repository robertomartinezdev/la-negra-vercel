<script setup lang="ts">
import { useResponsive } from '../../composables/useResponsive'
import { useNavigation } from '../../composables/useNavigation'

const { goTo } = useNavigation()
const { isMobile } = useResponsive()
const localePath = useLocalePath();
</script>

<template>
  <section class="home-container">
    <NuxtPicture
      v-if="isMobile"
      format="jpg"
      src="/home.jpg"
      fit="contain"
      sizes="500px"
    />
    <NuxtPicture
      v-else
      format="jpg"
      src="/home.jpg"
      fit="cover"
      sizes="1200px"
      height="400px"
    />
    <p class="home-text" v-text="$t('app.home.text')" />
    <div class="home-shows-container">
      <div @click="goTo(localePath('/shows/enlasnubes'))" class="clickable-img">
        <NuxtPicture
          format="jpg"
          src="/poster-clouds.jpg"
          fit="cover"
          sizes="300px"
        />
      </div>

      <div @click="goTo(localePath('/shows/nautilus'))" class="clickable-img">
        <NuxtPicture
          format="jpg"
          src="/poster-nautilus.jpg"
          fit="cover"
          sizes="300px"
        />
      </div>

      <div @click="goTo(localePath('/shows/elarboldetenere'))" class="clickable-img">
        <NuxtPicture
          format="jpg"
          src="/poster-tenere.jpg"
          fit="cover"
          sizes="300px"
        />
      </div>

      <div @click="goTo(localePath('/shows/pisarelcesped'))" class="clickable-img">
        <NuxtPicture
          format="jpg"
          src="/poster-grass.jpg"
          fit="cover"
          sizes="300px"
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
.shows-title {
  font-size: 30px;
  letter-spacing: 2px;
}

@media screen and (min-width: 1300px) {
  .home-shows-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
}
</style>
