<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios, { type AxiosResponse } from "axios";
import BaseButton from "../components/UI/base-button/BaseButton.vue";
import { useToastStore } from "../stores/useToast";

type TContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
};

const form = ref<TContactForm>({
  name: "",
  email: "",
  subject: "",
  message: "",
  privacy: false,
});

const store = useToastStore();

const localePath = useLocalePath();

const isLoading = ref(false);

const sendEmail = async () => {
  isLoading.value = true;

  try {
    const response: AxiosResponse<TContactForm> = await axios.post(
      `${import.meta.env.VITE_BASE_PRO_URL}/api/contact`,
      form.value,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response.data) {
      store.showSuccessToast();
      form.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false,
      };
    }
  } catch (error) {
    // eslint-disable-next-line no-unused-expressions
    error;
    store.showErrorToast();
  } finally {
    isLoading.value = false;
  }
};

const input = ref();

onMounted(() => {
  input.value.focus();
});
</script>

<template>
  <form class="form-container" method="post" @submit.prevent="sendEmail()">
    <h2 class="title-card">
      {{ $t("app.contact.title").toUpperCase() }}
    </h2>
    <label class="form-label" for="name">
      {{ $t("app.contact.name") }}
    </label>
    <input
      id="name"
      ref="input"
      v-model="form.name"
      class="form-input form-input-text"
      type="text"
      name="name"
      :placeholder="$t('app.contact.typeName')"
      autocomplete="off"
      required
    />

    <label class="form-label" for="email">
      {{ $t("app.contact.email") }}
    </label>
    <input
      id="email"
      v-model="form.email"
      class="form-input form-input-email"
      type="email"
      name="email"
      autocomplete="off"
      required
      :placeholder="$t('app.contact.typeEmail')"
    />

    <label class="form-label" for="subject">
      {{ $t("app.contact.subject") }}
    </label>
    <input
      id="subject"
      v-model="form.subject"
      class="form-input form-input-text"
      type="text"
      name="subject"
      :placeholder="$t('app.contact.typeSubject')"
      autocomplete="off"
      required
    />

    <label class="form-label" for="message">
      {{ $t("app.contact.message") }}
    </label>
    <textarea
      id="message"
      v-model="form.message"
      class="form-textarea"
      type="message"
      name="message"
      autocomplete="off"
      required
      :placeholder="$t('app.contact.typeMessage')"
    />

    <div class="form-privacy-container">
      <input
        id="privacy"
        v-model="form.privacy"
        type="checkbox"
        name="privacy"
        autocomplete="off"
        required
      />
      <label for="privacy">
        {{ $t("app.contact.confirm") }}
        <NuxtLink :to="localePath('privacy-policy')" class="form-privacy-link">
          {{ $t("app.contact.privacy") }}</NuxtLink
        >
      </label>
    </div>

    <div class="form-input-submit-wrapped">
      <BaseButton
        type="submit"
        :is-loading="false"
        severity="primary"
        :text="$t('app.contact.send')"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  border-radius: 3px;
  padding: 50px;
  padding-bottom: 100px;
  background-color: var(--bg-card);
}
.form-container .form-textarea {
  margin: 15px 0;
  padding: 10px;
  width: 100%;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 3px;
  display: inline-block;
  box-sizing: border-box;
  transition: 0.2s ease all;
  resize: vertical;
  line-height: 3;
}

.form-container .form-textarea:focus {
  border-color: var(--border);
}

.form-container .form-label {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 15px;
  color: #bbb;
  cursor: pointer;
  color: var(--text-card);
}

.form-container .form-input {
  margin: 10px 0;
  padding: 15px 10px;
  width: 100%;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

.form-container input[type="text"]:focus,
.form-container input[type="email"]:focus {
  border-color: var(--border);
}

.form-input-submit-wrapped {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  top: 50px;
}

.form-input-submit:hover {
  opacity: 0.8;
}

.form-input-submit:active {
  opacity: 0.4;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: var(--text-xs);
}

input[type="checkbox"] + label:last-child {
  margin-bottom: 0;
}

input[type="checkbox"] + label:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid var(--border-card);
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.6;
  -webkit-transition:
    all 0.12s,
    border-color 0.08s;
  transition:
    all 0.12s,
    border-color 0.08s;
}

input[type="checkbox"]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 3px;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.form-privacy-container {
  display: flex;
  gap: 5px;
  width: 100%;
  position: relative;
  top: 20px;
  color: var(--text-card);
}
.form-privacy-label,
.form-privacy-link {
  opacity: 1;
  font-weight: bolder;
  color: #1c1c1c;
}

@media screen and (min-width: 1300px) {
  input[type="checkbox"] + label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: var(--text-base);
  }

  .form-container {
    bottom: 0px;
  }
}
</style>
