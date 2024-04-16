<script setup>
const props = defineProps(["imageUrl", "name", "siteUrl"]);
</script>

<template>
  <a :href="siteUrl" class="colleague-profile" target="_blank">
    <img :src="imageUrl" class="colleague-image" />
    <div class="colleague">
      <h6 class="footer-text">{{ name }}</h6>
      <div class="line-small"></div>
    </div>
  </a>
</template>
