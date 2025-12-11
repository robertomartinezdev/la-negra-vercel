<script setup lang="ts">
import TourListItem from "./TourListItem.vue";
import data from "./tour.json";

</script>

<template>
  <div>
    <TourListItem
      v-for="item in data"
      :id="item.id"
      :key="item.id"
      :day="item.day"
      :month-locale-key="$t(item.monthLocaleKey)"
      :show-title-locale-key="$t(item.showTitleLocaleKey)"
      :location="item.location"
      :tickets-url="item.ticketsUrl"
      :show-url="item.showUrl"
      :month="item.month"
      :year="item.year"
    />
  </div>
</template>
