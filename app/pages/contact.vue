<script setup lang="ts">
import ContactForm from "../../components/ContactForm.vue";
</script>

<template>
  <div>
    <ContactForm />
    <div class="distribution-container">
      <div class="container">
        <h3 class="title">
          {{ $t("app.contact.distribution").toUpperCase() }}
        </h3>
        <a class="link-item" href="https://a-mas.net/" target="a_blank">
          <NuxtImg format="png" src="logo-amas-black.png" sizes="60px" />
        </a>
      </div>
      <a class="link-item" href="https://a-mas.net/contacto/" target="a_blank">
        {{ $t("app.contact.title").toUpperCase() }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.distribution-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  border-radius: 3px;
  padding: 60px;
  background-color: var(--bg-card);
  margin-top: 50px;
  gap: 30px;
}

.title {
  font-size: 20px;
  color: var(--text-card);
  line-height: 10px;
  letter-spacing: 3px;
}

.container {
  display: flex;
  flex-direction: row-reverse;
  gap: 30px;
}
.link-item {
  text-decoration: underline;
  color: var(--text-card);
  font-weight: bolder;
  cursor: pointer;
  font-size: var(--text-lg);
}

@media screen and (min-width: 600px) {
  .distribution-container {
    width: 300px;
  }
}

@media screen and (min-width: 1300px) {
  .distribution-container {
    width: 460px;
  }
}
</style>
