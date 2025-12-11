<script setup lang="ts">
const shows = [
  {
    text: "app.shows.clouds.title",
    to: "/shows/enlasnubes",
    image: "carousel-nuvols.jpg",
  },
  {
    text: "app.shows.nautilus.title",
    to: "/shows/nautilus",
    image: "carousel-nautilus.jpg",
  },
  {
    text: "app.shows.tenere.title",
    to: "/shows/elarboldetenere",
    image: "carousel-tenere.jpg",
  },
  {
    text: "app.shows.grass.title",
    to: "/shows/pisarelcesped",
    image: "carousel-grass.jpg",
  },
];
</script>

<template>
  <div class="show-list">
    <div v-for="(show, index) in shows" :key="index" class="show">
      <NuxtLink :to="show.to">
        <div class="show-image">
          <img :src="show.image" alt="" class="image" />
          <span class="image-text">{{ $t(show.text).toUpperCase() }}</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.show-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.image {
  height: 300px;
  width: 400px;
  object-fit: cover;
  height: auto;
  filter: grayscale(0);
  transition:
    transform 0.2s,
    filter 0.5s ease;
}

.show-image:hover .image {
  filter: grayscale(100%);
}

.image-text {
  font-size: 32px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
