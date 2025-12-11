<script setup lang="ts">
import { useThemeStore } from "../../../stores/useTheme";

const store = useThemeStore();
</script>

<template>
  <div class="switch-container">
    <label class="switch">
      <input type="checkbox" />
      <div class="slider round" @click="store.toggleTheme()" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.switch-container {
  display: flex;
}
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 15px;
}
/* Ocultamos el checkbox html */
.switch input {
  display: none;
}

/* Formateamos la caja del interruptor sobre la cual se deslizará la perilla de control o slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #dcdcdc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

/* Pintamos la perilla de control o slider usando el selector before */
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: -8.5px;
  bottom: -2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://api.iconify.design/fa6-solid:sun.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;

  color: white;
}

/* Cambiamos el color de fondo cuando el checkbox esta activado */
input:checked + .slider {
  background-color: #dcdcdc;
}

input:checked + .slider:before {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://api.iconify.design/fa6-solid:moon.svg?color=%23000000);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  color: black;
}

/* Deslizamos el slider a la derecha cuando el checkbox esta activado */
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Aplicamos efecto de bordes redondeados en slider y en el fondo del slider */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
