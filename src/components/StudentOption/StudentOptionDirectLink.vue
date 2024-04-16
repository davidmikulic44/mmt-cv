<script setup>
const props = defineProps(["name", "imageUrl", "siteUrl"]);
import { RouterLink } from "vue-router";
import "./styles/_studentOption.scss";
</script>

<template>
  <a :href="siteUrl" class="student-option-container">
    <img :src="imageUrl" class="student-option-image" />
    <h1 class="student-option-name">{{ name }}</h1>
  </a>
</template>
