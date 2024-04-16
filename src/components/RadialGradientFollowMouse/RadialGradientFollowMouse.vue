<template>
  <div
    class="radial-gradient-follow-mouse"
    :style="{
      background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${color1} 0%, ${color2} 100%)`,
    }"
    @mousemove="updateMousePosition"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

onMounted(() => {
  window.addEventListener("scroll", updateMousePosition);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateMousePosition);
});
</script>

<script>
import { defineProps } from "vue";

export default {
  props: {
    color1: {
      type: String,
      default: "#ffffff",
    },
    color2: {
      type: String,
      default: "#94b0b3",
    },
  },
};
</script>
