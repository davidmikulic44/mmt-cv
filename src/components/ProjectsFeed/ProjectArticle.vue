<script setup>
import { ref, defineProps } from "vue";

const props = defineProps([
  "imageUrl",
  "imageUrlBig",
  "date",
  "title",
  "desc",
  "githubUrl",
  "shake",
]);

const imageEnlarged = ref(false);
const imageUrl = ref(props.imageUrl);

const changeImageSize = () => {
  imageEnlarged.value = !imageEnlarged.value;
  if (imageEnlarged.value) {
    imageUrl.value = props.imageUrlBig;
    // Apply "project-container-big" class to the outer container
    containerClass.value = "project-container-big";
    // Apply "project-image-big" class to the image container
    imageClass.value = "project-image-big";
  } else {
    imageUrl.value = props.imageUrl;
    // Remove "project-container-big" class from the outer container
    containerClass.value = "project-container";
    // Remove "project-image-big" class from the image container
    imageClass.value = "project-image";
  }
};

// Define reactive properties for dynamic class binding with default values
const containerClass = ref("project-container");
const imageClass = ref("project-image");
</script>

<template>
  <!-- Bind dynamic classes -->
  <div :class="containerClass" class="shake">
    <img :src="imageUrl" :class="imageClass" @click="changeImageSize" />
    <div class="project-info">
      <div class="project-header">
        <h6 class="project-date">
          {{ date }}
        </h6>
        <h2 class="project-title">
          {{ title }}
        </h2>
      </div>
      <div class="desc-container">
        <p class="project-description">{{ desc }}</p>
      </div>
      <a :href="githubUrl" class="project-url" target="_blank">
        Pogledaj kod »
        <div class="line"></div>
      </a>
    </div>
  </div>
</template>
