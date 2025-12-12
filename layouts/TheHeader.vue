<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import BaseAccordion from "../components/UI/base-accordion/BaseAccordion.vue";
import BaseSwitchTheme from "../components/UI/base-switch-theme/BaseSwitchTheme.vue";
import BaseLocale from "../components/UI/base-locale/BaseLocale.vue";

import { useThemeStore } from "../stores/useTheme";
import { useNavigation } from '../composables/useNavigation'

const { goTo } = useNavigation()
const localePath = useLocalePath();

const ROUTER_LIST_ITEMS = [
  { text: "app.company.title", to: "/company" },
  { text: "app.tour.title", to: "/tour" },
  { text: "app.streaming.title", to: "/streaming" },
  { text: "app.contact.title", to: "/contact" },
];

const ROUTER_SHOWS_LIST_ITEMS = [
  { text: "app.shows.tenere.title", to: "/shows/elarboldetenere" },
  { text: "app.shows.nautilus.title", to: "/shows/nautilus" },
  { text: "app.shows.clouds.title", to: "/shows/enlasnubes" },
  { text: "app.shows.grass.title", to: "/shows/pisarelcesped" },
];

const hasShowsItems = ref<boolean>(false);
const store = useThemeStore();

const toggle = () => { hasShowsItems.value = !hasShowsItems.value; };
const openDropdownMenuShows = () => { hasShowsItems.value = true; };
const closeDropdownMenuShows = () => { hasShowsItems.value = false; };

// Nuevo método para cerrar dropdown y volver al home
const closeDropdownMenuShowsAndGoHome = () => {
  hasShowsItems.value = false;
  goTo(localePath('/'));
};
</script>

<template>
  <div>
    <BaseAccordion>
      <template #header="{ isOpen, toggleAccordion }">
        <header class="header-container">
          <!-- Logo -->
          <div class="header-logo-wrapped">
            <div
              v-show="store.getCurrentTheme === 'light'"
              class="link-item"
              @click="closeDropdownMenuShowsAndGoHome"
            >
              <NuxtImg format="png" src="logo-black.png" sizes="100px" />
            </div>
            <div
              v-show="store.getCurrentTheme === 'dark'"
              class="link-item"
              @click="closeDropdownMenuShowsAndGoHome"
            >
              <NuxtImg format="png" src="logo-white.png" sizes="100px" />
            </div>
          </div>

          <!-- Menú Desktop -->
          <nav class="navs-desktop-wrapped">
            <NuxtLink
              v-for="item in ROUTER_LIST_ITEMS"
              :key="item.to"
              class="link-item"
              :to="localePath(item.to)"
              @click="closeDropdownMenuShows"
            >
              {{ $t(item.text) }}
            </NuxtLink>

            <nav class="dropdown" @mouseenter="openDropdownMenuShows">
              <a class="link-item">{{ $t("app.shows.title") }}</a>
              <div
                v-if="hasShowsItems"
                class="dropdown-menu"
                @mouseleave="closeDropdownMenuShows"
              >
                <NuxtLink
                  v-for="item in ROUTER_SHOWS_LIST_ITEMS"
                  :key="item.to"
                  class="link-item"
                  :to="localePath(item.to)"
                  @click="closeDropdownMenuShows"
                >
                  {{ $t(item.text) }}
                </NuxtLink>
              </div>
            </nav>
          </nav>

          <!-- Menú Mobile -->
          <div class="header-menu-wrapped">
            <BaseLocale />
            <BaseSwitchTheme />
            <div class="header-menu-item">
              <Icon
                v-if="!isOpen"
                class="icon-item"
                icon="fa6-solid:bars"
                width="20"
                :inline="true"
                @click="toggleAccordion"
              />
              <Icon
                v-if="isOpen"
                class="icon-item"
                icon="fa6-solid:xmark"
                width="20"
                :inline="true"
                @click="toggleAccordion"
              />
            </div>
          </div>
        </header>
      </template>

      <template #content="{ isOpen, close }">
        <nav v-if="isOpen" class="nav-menu-wrapped">
          <NuxtLink
            v-for="item in ROUTER_LIST_ITEMS"
            :key="item.to"
            class="link-item"
            :to="item.to"
            @click="close"
          >
            {{ $t(item.text) }}
          </NuxtLink>

          <div class="nav-shows-wrapped" @click="toggle">
            <a class="link-item">{{ $t("app.shows.title") }}</a>
            <Icon
              class="icon-item"
              icon="fa6-solid:chevron-down"
              :inline="true"
              :vertical-flip="hasShowsItems"
            />
          </div>

          <div v-if="hasShowsItems" class="nav-menu-wrapped">
            <NuxtLink
              v-for="item in ROUTER_SHOWS_LIST_ITEMS"
              :key="item.to"
              class="link-item"
              :to="item.to"
              @click="close"
            >
              {{ $t(item.text) }}
            </NuxtLink>
          </div>
        </nav>
      </template>
    </BaseAccordion>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo-wrapped {
  display: flex;
  align-items: center;
  gap: 5px;
}

.navs-desktop-wrapped {
  display: none;
}

.header-menu-wrapped {
  display: inline-flex;
  align-items: center;
  gap: 25px;
}

.icon-item {
  cursor: pointer;
  color: var(--icon);
}

.nav-menu-wrapped {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 5px;
}

.nav-shows-wrapped {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.link-item {
  text-decoration: none;
  color: inherit;
  font-weight: bolder;
  cursor: pointer;
  font-size: var(--text-lg);
}

@media screen and (min-width: 1300px) {
  .header-menu-item {
    display: none;
  }

  .navs-desktop-wrapped {
    display: flex;
    gap: 35px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-menu {
    position: absolute;
    right: 0;
    background-color: var(--theme-bg);
    border: 1px solid #ccc;
    list-style: none;
    padding: 1rem;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .dropdown-menu > .link-item {
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: var(--text-base);
    white-space: nowrap;
  }

  .dropdown-menu > .link-item:hover {
    background-color: var(--hover-color);
  }

  .nav-menu-wrapped {
    display: none;
  }

  .dropdown > .link-item {
    cursor: default;
  }
}
</style>
