<script setup>
const props = defineProps(["imageUrl", "linkUrl", "imageClass"]);
</script>

<template>
  <a :href="linkUrl" target="_blank">
    <img :class="imageClass" :src="imageUrl" alt="" />
  </a>
</template>
