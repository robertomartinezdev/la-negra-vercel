<script setup lang="ts">
import BaseButton from "../components/UI/base-button/BaseButton.vue";

type TPropsTourListItem = {
  id: number;
  day: number;
  monthLocaleKey: string;
  showTitleLocaleKey: string;
  location: string;
  ticketsUrl: string;
  showUrl: string;
  month: number;
  year: number;
};

const props = defineProps<TPropsTourListItem>();
const localePath = useLocalePath();

const goToTickets = () => {
  const url = props.ticketsUrl;
  window.open(url, "_blank");
};
</script>

<template>
  <div>
    <section>
      <div class="tour-card-container">
        <div class="tour-card-date-wrapped">
          <span class="tour-card-date-mounth">{{ props.monthLocaleKey }}</span>
          <span class="tour-card-date-day">{{ props.day }}</span>
        </div>
        <div class="tour-card-show-location-tickets-wrapped">
          <div class="tour-card-show-location-wrapped">
            <nuxt-link class="tour-card-show" :to="localePath(props.showUrl)"
              >{{ props.showTitleLocaleKey }}
            </nuxt-link>
            <span class="tour-card-place">{{ props.location }}</span>
          </div>
          <a
            class="tour-card-tickets-link"
            :href="props.ticketsUrl"
            target="a_blank"
          >
            {{ $t("app.tour.tickets") }}
          </a>
          <BaseButton
            class="tour-card-tickets-button"
            severity="primary-theme"
            :text="$t('app.tour.tickets')"
            @@click="goToTickets"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.tour-card-container {
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #888;
  padding: 20px;
}

.tour-card-date-wrapped {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #888;
  padding: 15px;
  width: 35px;
}

.tour-card-date-mounth {
  font-size: 13px;
}

.tour-card-date-day {
  display: flex;
  font-size: 20px;
  font-weight: bolder;
  letter-spacing: 2px;
}

.tour-card-show-location-tickets-wrapped {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.tour-card-show-location-wrapped {
  display: flex;
  flex-direction: column;
}
.tour-card-show {
  font-weight: bolder;
  text-decoration: none;
  color: var(--theme-text);
}

.tour-card-place {
  font-size: 12px;
  color: #888;
}

.tour-card-tickets-link {
  text-decoration: none;
  color: var(--theme-text);
}

.tour-card-tickets-button {
  display: none;
}

@media screen and (min-width: 640px) {
  .tour-card-container {
    width: 500px;
  }
  .tour-card-show-location-tickets-wrapped {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .tour-card-show-location-wrapped {
    gap: 12px;
  }
  .tour-card-tickets-link {
    display: none;
  }
  .tour-card-tickets-button {
    display: flex;
  }
}

@media screen and (min-width: 1300px) {
  .tour-card-container {
    width: 900px;
  }
}
</style>
