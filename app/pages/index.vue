<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <section class="home-container">
    <NuxtPicture
      format="jpg"
      src="home.jpg"
      fit="contain"
      sizes="xs:100vw"
      class="img-mobile"
    />
    <NuxtPicture
      format="jpg"
      src="home.jpg"
      fit="cover"
      sizes="lg:1125px"
      height="400px"
      class="img-desktop"
    />
    <p class="home-text" v-text="$t('app.home.text')" />
    <div class="home-shows-container">
      <NuxtLink :to="localePath('/shows/enlasnubes')">
        <NuxtPicture
          format="jpg"
          src="poster-clouds.jpg"
          fit="cover"
          sizes="300px"
          class="show-img"
        />
      </NuxtLink>
      <NuxtLink :to="localePath('/shows/nautilus')">
        <NuxtPicture
          format="jpg"
          src="poster-nautilus.jpg"
          fit="contain"
          sizes="300px"
          class="show-img"
        />
      </NuxtLink>
      <NuxtLink :to="localePath('/shows/elarboldetenere')">
        <NuxtPicture
          format="jpg"
          src="poster-tenere.jpg"
          fit="cover"
          sizes="300px"
          class="show-img"
        />
      </NuxtLink>
      <NuxtLink :to="localePath('/shows/pisarelcesped')">
        <NuxtPicture
          format="jpg"
          src="poster-grass.jpg"
          fit="cover"
          sizes="300px"
          class="show-img"
        />
      </NuxtLink>
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
